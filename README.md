**A way to load online images in biggest possible size**

The method explained below will load most photos you see online in the largest possible size. (if supported by the script)

Every online photo you open, the script checks if there is a bigger version. And it does no further processing. It does not search or upscale. It just changes the URL with a formula and loads the bigger image.

For example, WordPress shrinks every photo into several smaller sizes, and fortunately, it does not change the URL so much that the original image can't be found.

This script is co-written with @ebraminio. 

**How to use:**
1. Install Tampermonkey from https://www.tampermonkey.net/.
2. Download the script (https://raw.githubusercontent.com/Arasteh/getbigimages/refs/heads/main/script.js) and install it from Tampermonkey dashboard.
3. Open an image (from supported websites) in a new tab. The script loads a bigger version of it.

To make sure that the script is working, open this image in a new tab and wait for its largest size to load.

Supported websites

There is no guarantee this script will work forever. If a website changes its file management algorithm, this script may stop working on that specific website. However, for now, these are the main websites that their images can be enlarged using this script:

- WordPress sites (nearly half of the web)

- Photos from Google services (Play Store, Maps, YouTube, etc.)

- Online stores (Amazon, Digikala, Basalam, Esam, Snapp, etc.)

- Movie information sites (IMDb, Filimo, Namava, Tamashakhoone, Filmnet, etc.)

- Museum and art auction sites (Met Museum, Christie's, Bonham's, etc.)

- News sites (New Yorker, Forbes, etc.)

- Iranian news sites (IRNA, ISNA, Fars, ILNA, Mehr, etc.)

- Stock sites (Shutterstock, Freepik, Vecteezy, Unsplash, Dreamstime, etc.) (only the largest preview of the stock file is loaded; the original file must be downloaded or purchased.)

- Wikipedia, Twitter, Neshan and much more.
