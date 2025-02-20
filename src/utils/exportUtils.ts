import { ContactMessage } from '../services/contactService';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const convertToCSV = (messages: ContactMessage[]): string => {
  // Define headers
  const headers = ['Name', 'Email', 'Phone', 'Subject', 'Message', 'Date'];
  
  // Convert messages to CSV rows
  const rows = messages.map(message => [
    message.name,
    message.email,
    message.phone,
    message.subject,
    // Escape quotes in message text and wrap in quotes
    `"${message.message.replace(/"/g, '""')}"`,
    new Date(message.createdAt).toLocaleString()
  ]);

  // Combine headers and rows
  return [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
};

export const downloadCSV = (data: string, filename: string): void => {
  const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  // Create download link
  if ((navigator as any).msSaveBlob) { // Handle IE 10+
    (navigator as any).msSaveBlob(blob, filename);
  } else {
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const downloadPDF = (messages: ContactMessage[]): void => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(16);
  doc.text('Contact Messages Report', 14, 15);
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 22);
  
  // Prepare table data
  const headers = [['Name', 'Email', 'Phone', 'Subject', 'Message', 'Date']];
  const data = messages.map(message => [
    message.name,
    message.email,
    message.phone,
    message.subject,
    message.message,
    new Date(message.createdAt).toLocaleString()
  ]);

  // Add table
  autoTable(doc, {
    head: headers,
    body: data,
    startY: 30,
    styles: { fontSize: 8, cellPadding: 2 },
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 35 },
      2: { cellWidth: 25 },
      3: { cellWidth: 30 },
      4: { cellWidth: 50 },
      5: { cellWidth: 25 }
    },
    headStyles: {
      fillColor: [8, 145, 178], // brand-600 color
      textColor: 255,
      fontStyle: 'bold'
    },
    didDrawPage: (data) => {
      // Add page number at the bottom
      doc.setFontSize(8);
      doc.text(
        `Page ${data.pageNumber} of ${doc.getNumberOfPages()}`,
        doc.internal.pageSize.width / 2,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      );
    }
  });

  // Save the PDF
  doc.save(`contact-messages-${new Date().toISOString().split('T')[0]}.pdf`);
}; 