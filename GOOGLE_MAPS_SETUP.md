# Google Maps Setup Instructions

## How to Get Your Google Maps Embed URL

You provided this share link: `https://share.google/yMPRd4RDr5k3qrm1u`

### Method 1: From Your Share Link (Recommended)

1. **Open the share link** in your browser: `https://share.google/yMPRd4RDr5k3qrm1u`
2. The map will open in Google Maps
3. Click the **three dots (⋮)** menu button in the top right corner of the map
4. Select **"Share or embed map"**
5. Click on the **"Embed a map"** tab
6. You'll see an iframe code like this:
   ```html
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   ```
7. **Copy the entire URL** from the `src` attribute (everything between the quotes after `src=`)
8. **Open** `src/components/ContactSection.tsx`
9. **Find** the line with `const googleMapsEmbedUrl = "..."`
10. **Replace** the URL between the quotes with your copied URL

### Method 2: Direct from Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your exact location (e.g., "College Road, Nashik, Maharashtra")
3. Once the location is found, click the **"Share"** button
4. Click the **"Embed a map"** tab
5. Copy the iframe `src` URL
6. Paste it in `src/components/ContactSection.tsx` as described above

## Current Setup

The component is currently set up with a placeholder URL. Once you replace it with your actual embed URL, the map will show your exact location with the correct zoom level and marker.

## File Location

The Google Maps embed URL is located in:
- **File**: `src/components/ContactSection.tsx`
- **Line**: Look for `const googleMapsEmbedUrl = "..."`

## Need Help?

If you have any issues getting the embed URL, you can also:
- Use the "Get Directions" button which will open Google Maps with your location
- The map will still work with a location-based URL, but the exact embed URL provides better precision

