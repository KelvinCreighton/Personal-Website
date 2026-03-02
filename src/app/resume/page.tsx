export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Resume</h1>
        <a 
          href="/resume.pdf" 
          download="Kelvin_Resume.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Download PDF
        </a>
      </div>
      
      <div className="w-full h-[80vh] rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
        <object 
          data="/resume.pdf" 
          type="application/pdf" 
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-50 dark:bg-gray-900 text-center">
            <p className="mb-4">It looks like your browser doesn't support built-in PDFs.</p>
            <a 
              href="/resume.pdf" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Click here to download the PDF instead.
            </a>
          </div>
        </object>
      </div>
    </main>
  );
}
