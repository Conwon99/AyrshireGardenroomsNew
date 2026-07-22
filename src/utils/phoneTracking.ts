// Phone number tracking configuration
// TODO: replace with the real Ayrshire Garden Rooms contact number before launch
export const CANONICAL_PHONE = "[ADD PHONE NUMBER]";
export const CANONICAL_PHONE_TEL = "";
export const TRACKING_PHONE = "[ADD PHONE NUMBER]";
export const TRACKING_PHONE_TEL = "";

// Format phone number for display (preserves +44 and formats nicely)
export const formatTrackingPhone = (phone: string): string => {
  // Keep +44 prefix and format as +44 7375 872331
  if (phone.startsWith("+44")) {
    const cleaned = phone.replace("+44", "").replace(/\s/g, "");
    // Format as +44 7375 872331 (country code, space, 4 digits, space, 6 digits)
    if (cleaned.length === 10) {
      return "+44 " + cleaned.slice(0, 4) + " " + cleaned.slice(4);
    }
    return "+44 " + cleaned;
  }
  return phone;
};

export const formatTrackingPhoneDisplay = (): string => {
  return formatTrackingPhone(TRACKING_PHONE);
};

