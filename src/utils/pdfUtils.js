/**
 * Utility functions for PDF handling
 */

/**
 * Check if a PDF file exists at the given path
 * @param {string} pdfPath - Path to the PDF file
 * @returns {Promise<boolean>} - True if PDF exists and is accessible, false otherwise
 */
export const checkPDFExists = async (pdfPath) => {
  try {
    // For local files in public folder, we'll try to fetch them
    // For production, this might need to be adjusted based on your deployment
    const response = await fetch(pdfPath, { method: 'HEAD' });

    // Check if the response is successful and content type is PDF
    return response.ok && (
      response.headers.get('content-type')?.includes('application/pdf') ||
      pdfPath.toLowerCase().endsWith('.pdf')
    );
  } catch (error) {
    // If fetch fails, assume PDF doesn't exist
    console.warn('PDF existence check failed:', error);
    return false;
  }
};