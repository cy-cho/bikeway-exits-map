import jsSHA from "jssha";

export default function setAuthorizationHeader() {
    const GMTString = new Date().toUTCString();

    const shaObj = new jsSHA("SHA-1", "TEXT", {
        hmacKey: { value: process.env.REACT_APP_PTX_KEY, format: "TEXT" },
    });

    shaObj.update(`x-date: ${GMTString}`);
    const HMAC = shaObj.getHMAC("B64");
    const authorization = `hmac username="${process.env.REACT_APP_PTX_ID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
    return { Authorization: authorization, "x-date": GMTString };
}
