// WhatsApp Integration Utility
// Sends appointment booking confirmation via WhatsApp

export const sendWhatsAppMessage = (bookingData) => {
  const adminPhone = '7387451891'; // WhatsApp number to receive booking notifications
  const clientPhone = bookingData.phone;

  // Message for admin
  const adminMessage = encodeURIComponent(
    `🎉 New Appointment Booking!\n\n` +
    `Name: ${bookingData.name}\n` +
    `Phone: ${bookingData.phone}\n` +
    `Email: ${bookingData.email || 'N/A'}\n` +
    `Service: ${bookingData.service}\n` +
    `Preferred Date: ${bookingData.date}\n` +
    `Preferred Time: ${bookingData.time}\n` +
    `Notes: ${bookingData.notes || 'N/A'}\n\n` +
    `Please confirm the appointment with the client.`
  );

  // Message for client
  const clientMessage = encodeURIComponent(
    `✨ Thank You for Booking!\n\n` +
    `Hello ${bookingData.name},\n\n` +
    `Your appointment has been received:\n\n` +
    `Service: ${bookingData.service}\n` +
    `Date: ${bookingData.date}\n` +
    `Time: ${bookingData.time}\n\n` +
    `Our team at Sarika Parlour will confirm your booking shortly.\n` +
    `📍 Location: Dr. Ambedkar Road, Vikas Palm, Satara\n` +
    `📞 Call us: 9511688804\n\n` +
    `Thank you for choosing us! 💄`
  );

  // Create WhatsApp links
  const adminWhatsAppLink = `https://wa.me/${adminPhone}?text=${adminMessage}`;
  const clientWhatsAppLink = `https://wa.me/91${clientPhone}?text=${clientMessage}`;

  return {
    adminLink: adminWhatsAppLink,
    clientLink: clientWhatsAppLink,
    sendAdmin: () => window.open(adminWhatsAppLink, '_blank'),
    sendClient: () => window.open(clientWhatsAppLink, '_blank'),
    sendBoth: () => {
      window.open(adminWhatsAppLink, '_blank');
      setTimeout(() => {
        window.open(clientWhatsAppLink, '_blank');
      }, 500);
    }
  };
};

// Alternative: For direct API integration (requires backend)
export const sendWhatsAppViaAPI = async (bookingData) => {
  try {
    const response = await fetch('/api/send-whatsapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData)
    });

    if (response.ok) {
      return { success: true, message: 'Booking confirmed! Check your WhatsApp.' };
    } else {
      return { success: false, message: 'Failed to send message' };
    }
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return { success: false, message: 'Error sending message' };
  }
};
