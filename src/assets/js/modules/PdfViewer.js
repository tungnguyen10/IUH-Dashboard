import BaseModule from './BaseModule';

export default class PdfViewer extends BaseModule {
  register() {
    // Elements
    this.container = this.el;
    this.object = this.container.querySelector('#pdfViewer');
    this.printBtn = this.container.querySelector('.pdf-print');
    this.downloadBtn = this.container.querySelector('.pdf-download');
    this.setupOtherControls();
  }

  setupOtherControls() {
    // Print functionality
    this.printBtn?.addEventListener('click', () => {
      this.printPDF();
    });

    // Download functionality
    this.downloadBtn?.addEventListener('click', () => {
      this.downloadPDF();
    });
  }

  getPdfUrl() {
    if (!this.object) {
      console.error('PDF viewer element not found');
      return null;
    }

    // Get URL from data attribute for object tag
    const pdfUrl = this.object.getAttribute('data');
    
    if (!pdfUrl) {
      console.error('PDF source URL not found');
      return null;
    }

    return pdfUrl.split('#')[0]; // Remove hash parameters
  }

  printPDF() {
    const pdfUrl = this.getPdfUrl();
    if (!pdfUrl) return;

    // Method 1: Try using object's built-in print functionality
    try {
      if (this.object && this.object.contentWindow) {
        this.object.contentWindow.print();
        return;
      }
    } catch (e) {
      console.log('Direct print failed, trying alternative method...');
    }

    // Method 2: Open in new window and print
    const printWindow = window.open(pdfUrl, '_blank');
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        try {
          printWindow.print();
        } catch (e) {
          console.error('Print failed:', e);
        }
      }, { once: true }); // Ensure event listener is removed after execution
    } else {
      alert('Vui lòng cho phép trình duyệt mở cửa sổ mới để in PDF');
    }
  }

  downloadPDF() {
    const pdfUrl = this.getPdfUrl();
    if (!pdfUrl) return;

    const fileName = pdfUrl.split('/').pop() || 'document.pdf';

    // Method 1: Using Fetch API for better handling
    fetch(pdfUrl)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then(blob => {
        // Create blob URL
        const url = window.URL.createObjectURL(blob);
        
        // Create temporary link and trigger download
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.download = fileName;
        
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
      })
      .catch(error => {
        console.error('Download failed:', error);
        this.downloadPDFFallback(pdfUrl, fileName);
      });
  }

  downloadPDFFallback(pdfUrl, fileName) {
    // Method 2: Direct download using native browser download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  }
}
