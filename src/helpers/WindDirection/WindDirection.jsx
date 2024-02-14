export const windDirection = (deg) => {
    let direction;
    if ((348.75 > deg && deg < 11.25) || (deg >= 348.75 && deg <= 360) || (deg >= 0 && deg < 11.25)) {
        direction = "N";
    } else if (deg >= 11.25 && deg < 33.75) {
        direction = "NNE";
    } else if (deg >= 33.75 && deg < 56.25) {
        direction = "NE";
    } else if (deg >= 56.25 && deg < 78.75) {
        direction = "ENE";
    } else if (deg >= 78.75 && deg < 101.25) {
        direction = "E";
    } else if (deg >= 101.25 && deg < 123.75) {
        direction = "ESE";
    } else if (deg >= 123.75 && deg < 146.25) {
        direction = "SE";
    } else if (deg >= 146.25 && deg < 168.75) {
        direction = "SSE";
    } else if (deg >= 168.75 && deg < 191.25) {
        direction = "S";
    } else if (deg >= 191.25 && deg < 213.75) {
        direction = "SSO";
    } else if (deg >= 213.75 && deg < 236.25) {
        direction = "SO";
    } else if (deg >= 236.25 && deg < 258.75) {
        direction = "OSO";
    } else if (deg >= 258.75 && deg < 281.25) {
        direction = 'O';
    } else if (deg >= 281.25 && deg < 303.75) {
        direction = 'ONO';
    } else if (deg >= 303.75 && deg < 326.25) {
        direction = 'NO';
    } else if (deg >= 326.25 && deg < 348.75) {
        direction = 'NNO';
    }
    return direction;
};

