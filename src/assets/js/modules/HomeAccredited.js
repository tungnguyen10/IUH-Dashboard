import BaseModule from "./BaseModule";

// Class kế thừa từ BaseModule - theo pattern module architecture
export default class HomeAccredited extends BaseModule {

  // Method khởi tạo - được gọi khi module được đăng ký
  register() {
    this.canvas = document.getElementById('quarters-canvas');
    this.tabPanes = document.querySelectorAll(".tab-pane");
    this.quartersConfig = null;

    this.initializeConfig();
    this.initializeElements();
    this.initCanvas();
    this.bindEvents();
    this.rotationAnimationFrame = null;
    this.rotationAnimating = false;
    this.imagesLoading = false;
    this.allImagesLoaded = false;

    // FPS tracking - Main animation
    this.lastFrameTime = 0;
    this.frameCount = 0;
    this.fpsStartTime = performance.now();
    this.targetFPS = 60;
    this.frameInterval = 1000 / this.targetFPS;
    this.lastRenderTime = 0;
    this.animationStopped = false;

    // FPS tracking - Rotation animation (separate)
    this.rotationLastFrameTime = 0;
    this.rotationFrameCount = 0;
    this.rotationFpsStartTime = 0;

    // console.log('🎯 HomeAccredited initialized with 60 FPS control');
  }

  // Initialize configuration data
  initializeConfig() {
    try {
      const configText = this.canvas.dataset.config;
      if (!configText) throw new Error('No data-config found');

      // Parse JSON trực tiếp từ attribute
      const homeAccreditedConfig = JSON.parse(configText);
      this.quartersConfig = JSON.parse(JSON.stringify(homeAccreditedConfig));

      // console.log('HomeAccredited: Configuration initialized', this.quartersConfig);
    } catch (error) {
      // console.error('Error parsing data-config:', error);
      this.quartersConfig = null;
    }
  }

  // Khởi tạo và lưu trữ các DOM elements
  initializeElements() {

    if (!this.canvas || !this.tabPanes.length) {
      console.warn('HomeAccredited: Required elements not found');
      return false;
    }

    this.ctx = this.canvas.getContext('2d');
    this.loadedImages = new Map();
    this.quarterPositions = [];

    return true;
  }

  // Khởi tạo canvas và render quarters
  async initCanvas() {
    if (!this.canvas || !this.quartersConfig) {
      console.error('Canvas or config not available');
      return;
    }

    try {
      this.setupCanvas();
      this.imagesLoading = true;
      this.allImagesLoaded = false;

      // Wait for all images to load completely
      await this.loadImages();

      // Verify all images are actually loaded
      const allLoaded = this.areImagesLoaded();
      if (!allLoaded) {
        console.warn('Not all images loaded, waiting for completion...');
        // Wait a bit more and try again
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      this.allImagesLoaded = true;
      this.imagesLoading = false;

      this.updateRotationOffset(true);
      this.quartersConfig.currentRotationOffset = this.quartersConfig.targetRotationOffset ?? this.quartersConfig.rotationOffset ?? 0;
      this.quartersConfig.rotationOffset = this.quartersConfig.currentRotationOffset;
      this.calculateQuarterPositions();

      // Only render after all images are confirmed loaded
      this.renderCanvas();
      // console.log('Canvas initialized successfully with all images loaded');
    } catch (error) {
      console.error('Error initializing canvas:', error);
      this.imagesLoading = false;
      this.allImagesLoaded = false;
      // Don't render if images failed to load
      // console.error('Canvas rendering aborted due to image loading failure');
    }
  }

  // Setup canvas properties
  setupCanvas() {
    const size = this.quartersConfig.canvasSize;
    const pixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    // Store for reference if needed elsewhere
    this.pixelRatio = pixelRatio;

    // Increase internal resolution for HiDPI displays
    this.canvas.width = size * pixelRatio;
    this.canvas.height = size * pixelRatio;

    // Make canvas responsive while keeping logical size consistent
    this.canvas.style.maxWidth = "100%";
    this.canvas.style.width = `${size}px`;
    this.canvas.style.height = `${size}px`;

    if (this.ctx) {
      // Reset any existing transforms before scaling
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(pixelRatio, pixelRatio);
      this.ctx.imageSmoothingEnabled = true;
      this.ctx.imageSmoothingQuality = 'high';
    }
  }

  // Load single image helper with better error handling
  loadImage(src, key) {
    return new Promise((resolve) => {
      const img = new Image();

      let imageLoaded = false;
      let timeoutId = null;

      img.onload = () => {
        if (imageLoaded) return; // Prevent double execution
        imageLoaded = true;

        if (timeoutId) clearTimeout(timeoutId);

        // Ensure image is fully decoded before storing
        if (img.complete && img.naturalWidth > 0) {
          this.loadedImages.set(key, img);
          // console.log(`✓ Successfully loaded image: ${src}`);
          resolve(img);
        } else {
          // console.warn(`Image loaded but not ready: ${src}`);
          // Wait a bit for image to be ready
          setTimeout(() => {
            this.loadedImages.set(key, img);
            resolve(img);
          }, 100);
        }
      };

      img.onerror = (error) => {
        if (imageLoaded) return;
        imageLoaded = true;

        if (timeoutId) clearTimeout(timeoutId);

        console.warn(`✗ Failed to load image: ${src}`, error);

        // Create a fallback colored rectangle instead of failing
        const fallbackCanvas = document.createElement('canvas');
        fallbackCanvas.width = 100;
        fallbackCanvas.height = 100;
        const ctx = fallbackCanvas.getContext('2d');

        // Use quarterColors from config based on quarter index
        let bgColor = '#cccccc';
        let textColor = '#ffffff';

        if (key !== 'centerLogo') {
          const quarterIndex = this.quartersConfig.quarters.findIndex(q => q.id === key);
          if (quarterIndex !== -1 && this.quartersConfig.quarterColors[quarterIndex]) {
            const colors = this.quartersConfig.quarterColors[quarterIndex];
            bgColor = colors.border;
            textColor = '#ffffff';
          }
        } else {
          // For center logo, use primary brand color
          bgColor = '#1e40af';
          textColor = '#ffffff';
        }

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, 100, 100);
        ctx.fillStyle = textColor;
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(key.toUpperCase(), 50, 50);

        // Convert canvas to image and wait for it to be ready
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          this.loadedImages.set(key, fallbackImg);
          // console.log(`✓ Fallback image created for: ${key}`);
          resolve(fallbackImg);
        };
        fallbackImg.src = fallbackCanvas.toDataURL();
      };

      // Add timeout to prevent hanging
      timeoutId = setTimeout(() => {
        if (!imageLoaded && !this.loadedImages.has(key)) {
          console.warn(`⏱ Image load timeout: ${src}`);
          img.onerror(new Error('Timeout'));
        }
      }, 10000); // 10 second timeout

      img.src = src;
    });
  }

  // Load tất cả images với better error handling
  async loadImages() {
    const imagesToLoad = [
      { src: this.quartersConfig.centerLogo, key: 'centerLogo' },
      ...this.quartersConfig.quarters.map(quarter => ({
        src: quarter.image,
        key: quarter.id
      }))
    ];

    // console.log('📦 Starting to load images:', imagesToLoad.map(i => i.key));

    // Use Promise.all to wait for ALL images (including fallbacks)
    const imagePromises = imagesToLoad.map(({ src, key }) =>
      this.loadImage(src, key).catch(error => {
        console.error(`Critical error loading ${src}:`, error);
        // Still return null but don't break the chain
        return null;
      })
    );

    try {
      // Wait for ALL promises to complete
      const results = await Promise.all(imagePromises);

      // Verify all images are loaded
      const loadedCount = results.filter(r => r !== null).length;
      const expectedCount = imagesToLoad.length;

      // console.log(`✓ Images loaded: ${loadedCount}/${expectedCount}`);
      // console.log('Loaded image keys:', Array.from(this.loadedImages.keys()));

      // Ensure we have at least fallback images for all
      if (loadedCount < expectedCount) {
        console.warn('Some images failed to load, but fallbacks should be in place');
      }

      return results;
    } catch (error) {
      console.error('Error in loadImages:', error);
      throw error; // Propagate error to prevent rendering
    }
  }

  // Tính toán vị trí của từng quarter theo hình tròn pie-style
  calculateQuarterPositions() {
    const centerX = this.quartersConfig.canvasSize / 2;
    const centerY = this.quartersConfig.canvasSize / 2;
    const outerRadius = this.quartersConfig.canvasSize / 2 - 10;
    const innerRadius = this.quartersConfig.centerRadius + (this.quartersConfig.segmentGap || 0);
    const angleStep = (2 * Math.PI) / this.quartersConfig.quarters.length;
    const maxGapAngle = angleStep * 0.8; // prevent overlap
    const gapSize = Math.max(0, this.quartersConfig.quarterGap || 0);
    const outerGapAngle = Math.min(maxGapAngle, gapSize / outerRadius || 0);
    const innerGapAngle = innerRadius > 0 ? Math.min(maxGapAngle, gapSize / innerRadius || 0) : 0;
    const halfOuterGap = outerGapAngle / 2;
    const halfInnerGap = innerGapAngle / 2;

    const rotationOffsetRaw = this.quartersConfig.currentRotationOffset ?? this.quartersConfig.rotationOffset ?? 0;
    const rotationOffset = this.normalizeAngle(rotationOffsetRaw);

    this.quarterPositions = this.quartersConfig.quarters.map((quarter, index) => {
      const baseStart = index * angleStep + rotationOffset;
      const baseEnd = (index + 1) * angleStep + rotationOffset;

      const rawOuterStart = baseStart + halfOuterGap;
      const rawOuterEnd = baseEnd - halfOuterGap;
      const rawInnerStart = baseStart + halfInnerGap;
      const rawInnerEnd = baseEnd - halfInnerGap;

      // Clamp in case gap is too large
      const hasOuterGap = rawOuterStart < rawOuterEnd;
      const hasInnerGap = rawInnerStart < rawInnerEnd;

      const outerStart = hasOuterGap ? rawOuterStart : baseStart;
      const outerEnd = hasOuterGap ? rawOuterEnd : baseEnd;
      const innerStart = hasInnerGap ? rawInnerStart : baseStart;
      const innerEnd = hasInnerGap ? rawInnerEnd : baseEnd;

      const outerStartAngle = outerStart - Math.PI / 2;
      const outerEndAngle = outerEnd - Math.PI / 2;
      const innerStartAngle = innerStart - Math.PI / 2;
      const innerEndAngle = innerEnd - Math.PI / 2;

      const normalizedOuterStart = this.normalizeAngle(outerStart);
      const normalizedOuterEnd = this.normalizeAngle(outerEnd);

      // Calculate text and image position (middle of the quarter)
      const midAngle = outerStartAngle + (outerEndAngle - outerStartAngle) / 2;
      const availableThickness = outerRadius - innerRadius;
      const contentInnerRadius = innerRadius + availableThickness * 0.25;
      const contentOuterRadius = innerRadius + availableThickness * 0.75;
      const denom = Math.pow(contentOuterRadius, 2) - Math.pow(contentInnerRadius, 2);
      const centroidRadius = denom !== 0
        ? (2 / 3) * (Math.pow(contentOuterRadius, 3) - Math.pow(contentInnerRadius, 3)) / denom
        : (contentInnerRadius + contentOuterRadius) / 2;
      const textRadius = centroidRadius;
      const imageRadius = innerRadius + availableThickness * 0.43;

      return {
        ...quarter,
        startAngle: outerStartAngle,
        endAngle: outerEndAngle,
        outerStartAngle,
        outerEndAngle,
        innerStartAngle,
        innerEndAngle,
        normalizedOuterStart,
        normalizedOuterEnd,
        midAngle,
        centerX,
        centerY,
        innerRadius,
        outerRadius,
        textX: centerX + textRadius * Math.cos(midAngle),
        textY: centerY + textRadius * Math.sin(midAngle),
        imageX: centerX + imageRadius * Math.cos(midAngle),
        imageY: centerY + imageRadius * Math.sin(midAngle),
        contentInnerRadius,
        contentOuterRadius,
        colorIndex: index
      };
    });
  }

  // Render toàn bộ canvas
  renderCanvas() {
    if (!this.ctx) return;

    // Only render if images are loaded or loading is complete
    if (this.imagesLoading && !this.allImagesLoaded) {
      // console.log('⏳ Waiting for images to load before rendering...');
      return;
    }

    this.clearCanvas();
    this.renderQuarters();
    this.renderCenterLogo();
  }

  // Clear canvas
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.quartersConfig.canvasSize, this.quartersConfig.canvasSize);
  }

  // Render tất cả quarters như pie segments
  renderQuarters() {
    this.quarterPositions.forEach(quarter => {
      this.renderQuarterSegment(quarter);
    });
  }

  // Render single quarter segment (pie slice)
  renderQuarterSegment(quarter) {
    const ctx = this.ctx;
    const colors = this.quartersConfig.quarterColors[quarter.colorIndex];
    const {
      centerX,
      centerY,
      innerRadius,
      outerRadius,
      outerStartAngle,
      outerEndAngle,
      innerStartAngle,
      innerEndAngle
    } = quarter;

    // Draw pie segment
    ctx.save();
    ctx.beginPath();

    const baseCornerRadius = Math.max(0, this.quartersConfig.outerCornerRadius || 0);
    const outerSpan = outerEndAngle - outerStartAngle;
    const maxCornerBySpan = outerSpan > 0 ? (outerRadius * outerSpan) / 2 : 0;
    const effectiveCornerRadius = Math.min(
      baseCornerRadius,
      maxCornerBySpan,
      Math.max(0, outerRadius - innerRadius)
    );

    const point = (radius, angle) => ({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    });

    if (effectiveCornerRadius > 0 && outerSpan > 0) {
      const cornerAngle = effectiveCornerRadius / outerRadius;
      const clampedCornerAngle = Math.min(cornerAngle, Math.max(outerSpan / 2 - 1e-4, 0));

      const startOffsetAngle = outerStartAngle + clampedCornerAngle;
      const endOffsetAngle = outerEndAngle - clampedCornerAngle;

      const outerStartOffset = point(outerRadius, startOffsetAngle);
      const outerStartCorner = point(outerRadius, outerStartAngle);
      const outerEndCorner = point(outerRadius, outerEndAngle);
      const innerEndPoint = point(innerRadius, innerEndAngle);
      const startControl = innerRadius > 0
        ? point(innerRadius + effectiveCornerRadius, outerStartAngle)
        : { x: centerX, y: centerY };

      ctx.moveTo(outerStartOffset.x, outerStartOffset.y);
      ctx.arc(centerX, centerY, outerRadius, startOffsetAngle, endOffsetAngle);
      ctx.arcTo(outerEndCorner.x, outerEndCorner.y, innerEndPoint.x, innerEndPoint.y, effectiveCornerRadius);

      if (innerRadius > 0) {
        ctx.arc(centerX, centerY, innerRadius, innerEndAngle, innerStartAngle, true);
      } else {
        ctx.lineTo(centerX, centerY);
      }

      ctx.arcTo(startControl.x, startControl.y, outerStartCorner.x, outerStartCorner.y, effectiveCornerRadius);
      ctx.arcTo(outerStartCorner.x, outerStartCorner.y, outerStartOffset.x, outerStartOffset.y, effectiveCornerRadius);
      ctx.lineTo(outerStartOffset.x, outerStartOffset.y);
    } else {
      const startPoint = point(outerRadius, outerStartAngle);
      ctx.moveTo(startPoint.x, startPoint.y);
      ctx.arc(centerX, centerY, outerRadius, outerStartAngle, outerEndAngle);

      if (innerRadius > 0) {
        const innerEndPoint = point(innerRadius, innerEndAngle);
        ctx.lineTo(innerEndPoint.x, innerEndPoint.y);
        ctx.arc(centerX, centerY, innerRadius, innerEndAngle, innerStartAngle, true);
      } else {
        ctx.lineTo(centerX, centerY);
      }
    }

    ctx.closePath();

    // Fill based on active state (no border stroke)
    if (quarter.active) {
      ctx.fillStyle = colors.border; // Active uses border color as fill
    } else {
      ctx.fillStyle = colors.bg;
    }

    ctx.fill();
    ctx.restore();

    if (quarter.active) {
      const highlightInnerRadius = Math.min(
        outerRadius - 6,
        innerRadius + Math.max(10, (outerRadius - innerRadius) * 0.22)
      );
      const highlightOuterRadius = Math.max(
        highlightInnerRadius + 2,
        outerRadius - 4
      );

      const highlightSlice = {
        centerX,
        centerY,
        innerRadius: highlightInnerRadius,
        outerRadius: highlightOuterRadius,
        innerStartAngle,
        innerEndAngle,
        outerStartAngle,
        outerEndAngle
      };

      // Soft glow confined to slice
      ctx.save();
      this.buildSlicePath(ctx, highlightSlice, false);
      ctx.clip();
      const glow = ctx.createRadialGradient(centerX, centerY, highlightInnerRadius, centerX, centerY, highlightOuterRadius);
      glow.addColorStop(0, this.hexToRgba(colors.border, 0.12));
      glow.addColorStop(1, this.hexToRgba(colors.border, 0));
      ctx.fillStyle = glow;
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      this.buildSlicePath(ctx, highlightSlice, false);
      ctx.fill();
      ctx.restore();

      // Add soft overlay
      ctx.save();
      this.buildSlicePath(ctx, highlightSlice, false);
      ctx.clip();
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = this.hexToRgba(colors.border, 0.35);
      ctx.beginPath();
      this.buildSlicePath(ctx, highlightSlice, false);
      ctx.fill();
      ctx.restore();
    }
    // Draw quarter image
    const image = this.loadedImages.get(quarter.id);
    this.drawQuarterImageInSegment(quarter, image);
    // Draw quarter text
    this.drawQuarterTextInSegment(quarter);
  }

  // Draw quarter text centered within the slice
  drawQuarterTextInSegment(quarter) {
    const ctx = this.ctx;
    const colors = this.quartersConfig.quarterColors[quarter.colorIndex];
    const {
      centerX,
      centerY,
      contentInnerRadius,
      contentOuterRadius,
      outerStartAngle,
      outerEndAngle
    } = quarter;


    const rawSpan = outerEndAngle - outerStartAngle;
    const angleSpan = Math.abs(rawSpan);
    const direction = Math.sign(rawSpan) || 1;
    const label = quarter.title || '';
    // chỉnh khoảng cách từ center
    let radialCenter = contentInnerRadius + (contentOuterRadius - contentInnerRadius) * 0.9;
    const baseFontSize = this.quartersConfig.quarters.length > 4 ? 20 : 24;
    let fontSize = baseFontSize;
    const minFontSize = 11;

    const computeMetrics = () => {
      ctx.font = `bold ${fontSize}px Inter`;
      const textWidth = ctx.measureText(label).width;
      const availableAngle = Math.max(0.2, angleSpan - 2 * 0.08);
      const maxAngleForRadius = availableAngle;
      const requiredAngle = textWidth / radialCenter;
      return { textWidth, maxAngleForRadius, requiredAngle };
    };

    let metrics = computeMetrics();

    while (metrics.requiredAngle > metrics.maxAngleForRadius && fontSize > minFontSize) {
      fontSize -= 1;
      metrics = computeMetrics();
    }

    while (metrics.requiredAngle > metrics.maxAngleForRadius && radialCenter < contentOuterRadius - 4) {
      radialCenter += 2;
      metrics = computeMetrics();
    }

    // Final check with updated font
    ctx.font = `bold ${fontSize}px Inter`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const anglePadding = 0.08;
    const usableAngle = Math.max(0, angleSpan - 2 * anglePadding);
    const totalAngleNeeded = metrics.requiredAngle;
    const angleScale = totalAngleNeeded > usableAngle && totalAngleNeeded > 0
      ? usableAngle / totalAngleNeeded
      : 1;
    const actualAngle = totalAngleNeeded * angleScale;
    const centerAngle = (outerStartAngle + outerEndAngle) / 2;
    let cursorAngle = centerAngle - direction * actualAngle / 2;

    ctx.save();
    ctx.fillStyle = quarter.active ? '#ffffff' : colors.text;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 2;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    for (const char of label) {
      const charWidth = ctx.measureText(char).width;
      let charAngle = charWidth / radialCenter;
      charAngle *= angleScale;
      if (charAngle <= 0) {
        cursorAngle += direction * 0.001;
        continue;
      }
      const midAngle = cursorAngle + direction * charAngle / 2;

      const posX = centerX + radialCenter * Math.cos(midAngle);
      const posY = centerY + radialCenter * Math.sin(midAngle);

      ctx.save();
      ctx.translate(posX, posY);
      ctx.rotate(midAngle + Math.PI / 2);
      ctx.fillText(char, 0, 0);
      ctx.restore();

      cursorAngle += direction * charAngle;
    }

    ctx.restore();
  }

  // Draw quarter image limited to half of the slice band
  drawQuarterImageInSegment(quarter, image) {
    const ctx = this.ctx;
    const {
      centerX,
      centerY,
      innerRadius,
      outerRadius,
      outerStartAngle,
      outerEndAngle
    } = quarter;

    const clipInnerRadius = innerRadius;
    const clipOuterRadius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const midAngle = (outerStartAngle + outerEndAngle) / 2;
    const halfSpan = (outerEndAngle - outerStartAngle) / 2;
    const fallbackLabel = (quarter.id || '').substring(0, 3).toUpperCase();

    ctx.save();
    try {
      ctx.translate(centerX, centerY);
      ctx.rotate(midAngle);

      ctx.beginPath();
      ctx.moveTo(clipInnerRadius * Math.cos(-halfSpan), clipInnerRadius * Math.sin(-halfSpan));
      ctx.arc(0, 0, clipOuterRadius, -halfSpan, halfSpan);
      ctx.lineTo(clipInnerRadius * Math.cos(halfSpan), clipInnerRadius * Math.sin(halfSpan));
      ctx.arc(0, 0, clipInnerRadius, halfSpan, -halfSpan, true);
      ctx.closePath();
      ctx.clip();

      if (image && image.complete) {
        const drawWidth = (clipOuterRadius - clipInnerRadius) * 2.2;
        const drawHeight = drawWidth;
        const centerOffset = (clipInnerRadius + clipOuterRadius) / 2;
        ctx.drawImage(
          image,
          centerOffset - drawWidth / 2,
          -drawHeight / 2,
          drawWidth,
          drawHeight
        );
      } else {
        const colors = this.quartersConfig.quarterColors[quarter.colorIndex];
        ctx.beginPath();
        ctx.moveTo(clipInnerRadius * Math.cos(-halfSpan), clipInnerRadius * Math.sin(-halfSpan));
        ctx.arc(0, 0, clipOuterRadius, -halfSpan, halfSpan);
        ctx.lineTo(clipInnerRadius * Math.cos(halfSpan), clipInnerRadius * Math.sin(halfSpan));
        ctx.arc(0, 0, clipInnerRadius, halfSpan, -halfSpan, true);
        ctx.closePath();
        ctx.fillStyle = colors?.border || '#ccc';
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(fallbackLabel, (clipInnerRadius + clipOuterRadius) / 2, 0);
      }
    } catch (error) {
      console.error('Error drawing quarter image:', error);
    }

    ctx.restore();
  }


  // Render center logo với fallback
  renderCenterLogo() {
    const centerX = this.quartersConfig.canvasSize / 2;
    const centerY = this.quartersConfig.canvasSize / 2;
    const logoRadius = this.quartersConfig.centerRadius;

    // Calculate pulse animation với FPS control
    const time = performance.now() * 0.002; // Control speed of pulse
    const pulseScale = 1.04 + Math.sin(time) * 0.04; // Pulse between 1.0 and 1.08
    const pulseOpacity = 0.8 + Math.sin(time) * 0.2; // Opacity between 0.6 and 1.0
    const animatedRadius = logoRadius * pulseScale;

    // Draw white circle background with pulse animation and shadow
    this.ctx.save();

    // Add shadow effect
    this.ctx.shadowColor = 'rgba(21, 56, 152, 0.3)';
    this.ctx.shadowBlur = 12;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 4;

    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, animatedRadius, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.globalAlpha = pulseOpacity;
    this.ctx.fill();

    // Reset shadow for stroke
    this.ctx.shadowColor = 'transparent';
    this.ctx.shadowBlur = 0;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;

    this.ctx.strokeStyle = 'rgba(21, 56, 152, 1)';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([1, 2]);
    this.ctx.stroke();
    this.ctx.restore();

    // Draw logo or fallback
    const centerLogo = this.loadedImages.get('centerLogo');
    if (centerLogo && centerLogo.complete) {
      try {
        const logoSize = 76;
        this.ctx.drawImage(
          centerLogo,
          centerX - logoSize / 2,
          centerY - logoSize / 2,
          logoSize,
          logoSize
        );
      } catch (error) {
        console.error('Error drawing center logo:', error);
        this.drawFallbackLogo(centerX, centerY, logoRadius);
      }
    } else {
      this.drawFallbackLogo(centerX, centerY, logoRadius);
    }

    // Continue pulse animation với FPS control nếu không bị stop
    if (!this.animationStopped && !this.rotationAnimating) {
      this.scheduleNextFrame();
    }
  }

  // Draw fallback logo
  drawFallbackLogo(centerX, centerY) {
    this.ctx.save();
    this.ctx.fillStyle = '#1e40af';
    this.ctx.font = 'bold 24px Inter';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText('IUH', centerX, centerY);
    this.ctx.restore();
  }

  // FPS controlled animation scheduling cho pulse animation
  scheduleNextFrame() {
    if (this.animationStopped || this.rotationAnimating) return;

    const now = performance.now();
    const elapsed = now - this.lastRenderTime;

    if (elapsed >= this.frameInterval) {
      // this.trackFPS(now);
      this.lastRenderTime = now - (elapsed % this.frameInterval);
      requestAnimationFrame(() => {
        if (!this.animationStopped && !this.rotationAnimating) {
          this.renderCanvas();
        }
      });
    } else {
      // Schedule for the next appropriate time
      const timeToNextFrame = this.frameInterval - elapsed;
      setTimeout(() => {
        if (!this.animationStopped && !this.rotationAnimating) {
          requestAnimationFrame(() => this.renderCanvas());
        }
      }, timeToNextFrame);
    }
  }

  // Track and log FPS cho main animation
  trackFPS(currentTime) {
    this.frameCount++;

    if (currentTime - this.fpsStartTime >= 1000) { // Every second
      const actualFPS = Math.round((this.frameCount * 1000) / (currentTime - this.fpsStartTime));

      if (actualFPS < 55) {
        console.warn(`🎯 Main Animation FPS: ${actualFPS} (below target 60 FPS)`);
      } else if (actualFPS > 65) {
        console.log(`⚡ Main Animation FPS: ${actualFPS} (above target, optimizing...)`);
      } else {
        console.log(`✅ Main Animation FPS: ${actualFPS} (optimal)`);
      }

      // Reset counters
      this.frameCount = 0;
      this.fpsStartTime = currentTime;
    }
  }

  // Bind events cho canvas và tab panes
  bindEvents() {
    if (this.canvas) {
      this.canvas.addEventListener('click', (event) => {
        this.handleCanvasClick(event);
      });
    }
  }

  // Xử lý click trên canvas
  handleCanvasClick(event) {
    const rect = this.canvas.getBoundingClientRect();
    // Map click coordinates from screen space to canvas logical space
    const scaleX = this.quartersConfig.canvasSize / rect.width;
    const scaleY = this.quartersConfig.canvasSize / rect.height;

    const clickX = (event.clientX - rect.left) * scaleX;
    const clickY = (event.clientY - rect.top) * scaleY;

    // Kiểm tra click có trúng quarter nào không
    const clickedQuarter = this.getClickedQuarter(clickX, clickY);
    if (clickedQuarter) {
      this.handleQuarterClick(clickedQuarter);
    }
  }

  // Detect quarter được click trong pie segment
  getClickedQuarter(x, y) {
    const centerX = this.quartersConfig.canvasSize / 2;
    const centerY = this.quartersConfig.canvasSize / 2;

    // Calculate distance from center
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

    // Check if click is within the pie ring (not center)
    const innerBound = this.quartersConfig.centerRadius + (this.quartersConfig.segmentGap || 0);
    if (distance < innerBound || distance > this.quartersConfig.canvasSize / 2 - 10) {
      return null;
    }

    // Calculate angle of click
    const angle = this.normalizeAngle(Math.atan2(y - centerY, x - centerX) + Math.PI / 2); // Adjust + normalize

    // Find which quarter this angle belongs to (accounting for gaps)
    for (const quarter of this.quarterPositions) {
      if (!quarter) continue;
      const { normalizedOuterStart, normalizedOuterEnd } = quarter;
      if (normalizedOuterStart <= normalizedOuterEnd) {
        if (angle >= normalizedOuterStart && angle <= normalizedOuterEnd) {
          return quarter;
        }
      } else {
        // Range wraps around 2π
        if (angle >= normalizedOuterStart || angle <= normalizedOuterEnd) {
          return quarter;
        }
      }
    }

    return null;
  }

  // Xử lý sự kiện click trên quarter
  handleQuarterClick(clickedQuarter) {
    // Update config active states
    this.quartersConfig.quarters.forEach(q => {
      q.active = q.id === clickedQuarter.id;
    });

    this.updateRotationOffset();
    this.calculateQuarterPositions();

    // Re-render canvas
    this.renderCanvas();

    // Show corresponding tab content
    this.showTabContent(clickedQuarter.tabId);
  }

  // Hiển thị tab content tương ứng
  showTabContent(tabId) {
    // Hide all tab panes
    this.tabPanes.forEach(pane => {
      pane.classList.remove("active");
    });

    // Show target tab pane
    const tabPane = document.getElementById(tabId);
    if (tabPane) {
      tabPane.classList.add("active");
    }
  }

  // Utility: Set active quarter theo tab ID
  setActiveQuarterByTabId(targetTabId) {
    const quarter = this.quartersConfig.quarters.find(q => q.tabId === targetTabId);
    if (quarter) {
      this.handleQuarterClick(quarter);
    }
  }

  // Normalize angle to range [0, 2π)
  normalizeAngle(angle) {
    const twoPi = Math.PI * 2;
    return ((angle % twoPi) + twoPi) % twoPi;
  }

  hexToRgba(hex, alpha = 1) {
    if (!hex) return `rgba(255, 255, 255, ${alpha})`;
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const normalized = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalized);
    if (!result) return `rgba(255, 255, 255, ${alpha})`;
    const [, r, g, b] = result;
    return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alpha})`;
  }

  // Helper: build a pie-slice path, optionally applying outer corner rounding
  buildSlicePath(ctx, slice, applyOuterCorner = false) {
    const {
      centerX,
      centerY,
      innerRadius,
      outerRadius,
      innerStartAngle,
      innerEndAngle,
      outerStartAngle,
      outerEndAngle
    } = slice;

    const point = (radius, angle) => ({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    });

    ctx.beginPath();

    const baseCorner = applyOuterCorner ? Math.max(0, this.quartersConfig.outerCornerRadius || 0) : 0;
    const span = outerEndAngle - outerStartAngle;
    const cornerLimitSpan = span > 0 ? (outerRadius * span) / 2 : 0;
    const cornerLimitThickness = outerRadius - innerRadius;
    const cornerRadius = Math.min(baseCorner, cornerLimitSpan, Math.max(0, cornerLimitThickness));

    if (cornerRadius > 0 && span > 0) {
      const cornerAngle = cornerRadius / outerRadius;
      const clampedCornerAngle = Math.min(cornerAngle, Math.max(span / 2 - 1e-4, 0));

      const startOffsetAngle = outerStartAngle + clampedCornerAngle;
      const endOffsetAngle = outerEndAngle - clampedCornerAngle;

      const outerStartOffset = point(outerRadius, startOffsetAngle);
      const outerStartCorner = point(outerRadius, outerStartAngle);
      const outerEndCorner = point(outerRadius, outerEndAngle);
      const innerEndPoint = point(innerRadius, innerEndAngle);
      const innerStartPoint = point(innerRadius, innerStartAngle);
      // const startControl = innerRadius > 0
      //   ? point(innerRadius + cornerRadius, outerStartAngle)
      //   : { x: centerX, y: centerY };

      ctx.moveTo(outerStartOffset.x, outerStartOffset.y);
      ctx.arc(centerX, centerY, outerRadius, startOffsetAngle, endOffsetAngle);
      ctx.arcTo(outerEndCorner.x, outerEndCorner.y, innerEndPoint.x, innerEndPoint.y, cornerRadius);

      if (innerRadius > 0) {
        ctx.arc(centerX, centerY, innerRadius, innerEndAngle, innerStartAngle, true);
        ctx.arcTo(innerStartPoint.x, innerStartPoint.y, outerStartCorner.x, outerStartCorner.y, cornerRadius);
      } else {
        ctx.lineTo(centerX, centerY);
        ctx.arcTo(centerX, centerY, outerStartCorner.x, outerStartCorner.y, cornerRadius);
      }

      ctx.arcTo(outerStartCorner.x, outerStartCorner.y, outerStartOffset.x, outerStartOffset.y, cornerRadius);
    } else {
      const startOuter = point(outerRadius, outerStartAngle);
      ctx.moveTo(startOuter.x, startOuter.y);
      ctx.arc(centerX, centerY, outerRadius, outerStartAngle, outerEndAngle);

      if (innerRadius > 0) {
        const innerEndPoint = point(innerRadius, innerEndAngle);
        ctx.lineTo(innerEndPoint.x, innerEndPoint.y);
        ctx.arc(centerX, centerY, innerRadius, innerEndAngle, innerStartAngle, true);
      } else {
        ctx.lineTo(centerX, centerY);
      }
    }

    ctx.closePath();
  }

  updateRotationOffset(forceImmediate = false) {
    if (!this.quartersConfig?.quarters?.length) {
      this.quartersConfig.targetRotationOffset = 0;
      this.quartersConfig.rotationOffset = 0;
      return;
    }

    const quarters = this.quartersConfig.quarters;
    let activeIndex = quarters.findIndex(q => q.active);
    if (activeIndex === -1) {
      activeIndex = 0;
    }

    const angleStep = (2 * Math.PI) / quarters.length;
    const desiredCenterPreShift = Math.PI / 2; // orientation before subtracting π/2
    const rawTarget = desiredCenterPreShift - (activeIndex * angleStep + angleStep / 2);

    const current = this.quartersConfig.currentRotationOffset ?? this.quartersConfig.rotationOffset ?? 0;
    let delta = this.normalizeAngle(rawTarget - current);
    if (delta > Math.PI) delta -= 2 * Math.PI;
    if (delta < -Math.PI) delta += 2 * Math.PI;
    const target = current + delta;

    this.quartersConfig.targetRotationOffset = target;
    if (forceImmediate) {
      this.startRotationAnimation(true);
    } else {
      this.startRotationAnimation();
    }
  }

  startRotationAnimation(forceImmediate = false) {
    const target = this.quartersConfig.targetRotationOffset ?? this.quartersConfig.rotationOffset ?? 0;
    let current = this.quartersConfig.currentRotationOffset ?? this.quartersConfig.rotationOffset ?? 0;

    if (forceImmediate) {
      this.quartersConfig.currentRotationOffset = target;
      this.quartersConfig.rotationOffset = this.normalizeAngle(target);
      this.calculateQuarterPositions();
      this.renderCanvas();
      if (this.rotationAnimationFrame) {
        cancelAnimationFrame(this.rotationAnimationFrame);
        this.rotationAnimationFrame = null;
      }
      this.rotationAnimating = false;
      this.rotationLastFrameTime = 0;
      // console.log('🔄 Rotation set immediately');
      // Resume pulse animation after immediate rotation
      if (!this.animationStopped) {
        this.scheduleNextFrame();
      }
      return;
    }

    if (this.rotationAnimationFrame) {
      cancelAnimationFrame(this.rotationAnimationFrame);
      this.rotationAnimationFrame = null;
    }

    // Stop pulse animation during rotation
    this.rotationAnimating = true;
    this.rotationLastFrameTime = 0;
    this.rotationFrameCount = 0;
    this.rotationFpsStartTime = 0;

    const step = (timestamp) => {
      // FPS control for rotation animation - 60 FPS guaranteed
      if (!this.rotationLastFrameTime) this.rotationLastFrameTime = timestamp;
      const elapsed = timestamp - this.rotationLastFrameTime;

      if (elapsed >= this.frameInterval) {
        const targetOffset = this.quartersConfig.targetRotationOffset ?? 0;
        current = this.quartersConfig.currentRotationOffset ?? 0;
        let delta = targetOffset - current;
        delta = ((delta + Math.PI) % (2 * Math.PI)) - Math.PI;

        const speed = this.quartersConfig.rotationAnimationSpeed ?? 0.18;

        if (Math.abs(delta) < 0.0005) {
          // Rotation completed
          current = targetOffset;
          this.quartersConfig.currentRotationOffset = current;
          this.quartersConfig.rotationOffset = this.normalizeAngle(current);
          this.calculateQuarterPositions();
          this.renderCanvas();
          this.rotationAnimating = false;
          this.rotationAnimationFrame = null;
          this.rotationLastFrameTime = 0;
          // console.log('🔄✅ Rotation animation completed at 60fps');

          // Resume pulse animation after rotation
          if (!this.animationStopped) {
            this.scheduleNextFrame();
          }
          return;
        }

        current += delta * Math.min(Math.max(speed, 0.05), 0.35);
        this.quartersConfig.currentRotationOffset = current;
        this.quartersConfig.rotationOffset = this.normalizeAngle(current);
        this.calculateQuarterPositions();
        this.renderCanvas();

        // Track FPS for rotation animation
        // this.trackRotationFPS(timestamp);

        // Update frame time accounting for frame interval
        this.rotationLastFrameTime = timestamp - (elapsed % this.frameInterval);
      }

      this.rotationAnimationFrame = requestAnimationFrame(step);
    };

    // console.log('🔄 Starting rotation animation at 60fps');
    this.rotationAnimationFrame = requestAnimationFrame(step);
  }

  // Track rotation animation FPS separately
  trackRotationFPS(currentTime) {
    if (!this.rotationFpsStartTime) this.rotationFpsStartTime = currentTime;
    this.rotationFrameCount++;

    if (currentTime - this.rotationFpsStartTime >= 1000) { // Every second
      const actualFPS = Math.round((this.rotationFrameCount * 1000) / (currentTime - this.rotationFpsStartTime));

      if (actualFPS < 55) {
        console.warn(`🔄 Rotation FPS: ${actualFPS} (below target 60 FPS)`);
      } else if (actualFPS > 65) {
        console.log(`🔄⚡ Rotation FPS: ${actualFPS} (above target, optimizing...)`);
      } else {
        console.log(`🔄✅ Rotation FPS: ${actualFPS} (optimal)`);
      }

      // Reset rotation FPS counters
      this.rotationFrameCount = 0;
      this.rotationFpsStartTime = currentTime;
    }
  }

  // Utility: Add new quarter dynamically
  async addQuarter(quarterData) {
    this.quartersConfig.quarters.push(quarterData);
    this.updateRotationOffset();
    this.calculateQuarterPositions();

    // Wait for image to load before rendering
    try {
      await this.loadImage(quarterData.image, quarterData.id);
      this.renderCanvas();
    } catch (error) {
      console.error('Error loading quarter image:', error);
      // Still render with fallback
      this.renderCanvas();
    }
  }

  // Utility: Remove quarter
  removeQuarter(quarterId) {
    this.quartersConfig.quarters = this.quartersConfig.quarters.filter(q => q.id !== quarterId);
    this.loadedImages.delete(quarterId);
    this.updateRotationOffset();
    this.calculateQuarterPositions();
    this.renderCanvas();
  }

  // Add method to check if all images are loaded
  areImagesLoaded() {
    const expectedImages = ['centerLogo', ...this.quartersConfig.quarters.map(q => q.id)];
    const allLoaded = expectedImages.every(key => this.loadedImages.has(key));

    if (!allLoaded) {
      const missing = expectedImages.filter(key => !this.loadedImages.has(key));
      console.log('Missing images:', missing);
    }

    return allLoaded;
  }

  destroy() {
    // console.log('🛑 Destroying HomeAccredited module - stopping all animations');

    // Stop all animations
    this.animationStopped = true;
    this.rotationAnimating = false;

    // Cancel animation frames
    if (this.rotationAnimationFrame) {
      cancelAnimationFrame(this.rotationAnimationFrame);
      this.rotationAnimationFrame = null;
    }

    // Reset all timing variables
    this.lastFrameTime = 0;
    this.frameCount = 0;
    this.lastRenderTime = 0;
    this.rotationLastFrameTime = 0;
    this.rotationFrameCount = 0;
    this.rotationFpsStartTime = 0;

    // console.log('✅ All animations stopped and resources cleaned up');
  }
}
