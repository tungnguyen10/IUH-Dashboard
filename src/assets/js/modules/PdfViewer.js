import BaseModule from './BaseModule';

export default class PdfViewer extends BaseModule {
  register() {

    // Elements
    this.container = this.el;
    this.iframe = this.container.querySelector('#pdfViewer');
    this.printBtn = this.container.querySelector('.pdf-print');
    this.downloadBtn = this.container.querySelector('.pdf-download');
    this.setupOtherControls();
  }



  setupOtherControls() {
    // Print functionality
    this.printBtn?.addEventListener('click', () => {
      if (this.iframe.contentWindow) {
        this.iframe.contentWindow.print();
      }
    });

    // Download functionality
    this.downloadBtn?.addEventListener('click', () => {
      this.downloadPDF();
    });
  }

  downloadPDF() {
    try {
      const pdfUrl = this.iframe.src.split('#')[0]; // Remove hash parameters

      // Method 1: Using Fetch API
      fetch(pdfUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = pdfUrl.split('/').pop() || 'document.pdf'; // Get filename from URL or use default
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        })
        .catch(err => {
          console.error('Error downloading PDF:', err);
          // Fallback to Method 2 if fetch fails
          this.downloadPDFFallback();
        });
    } catch (error) {
      console.error('Error initiating download:', error);
      this.downloadPDFFallback();
    }
  }

  downloadPDFFallback() {
    // Method 2: Direct link download
    const pdfUrl = this.iframe.src.split('#')[0];
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'document.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
