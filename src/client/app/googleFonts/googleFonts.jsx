import axios from 'axios';

const googleFonts = {
    getGoogleFonts: function() {
        return axios({
            method:'get',
            url:'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBiiQLqVOPrtj1uAvTfjvDWI49xPdEKyDw&sort=popularity',
            responseType:'json'
        }).then(function(response) {
            const allFonts = response.data.items;
            const betterFonts = allFonts.filter(function(font) {
                if (font.variants.indexOf('regular') < 0) {
                    return false;
                }
                if (font.variants.indexOf('italic') < 0) {
                    return false;
                }
                if (font.variants.indexOf('700') < 0) {
                    return false;
                }
                if (font.variants.indexOf('700italic') < 0) {
                    return false;
                }
                return true;
            });
            return betterFonts.slice(0, 25);
        }).catch(function(error) {
            console.log(error);
        });
    },
    getApiUrl: function(font) {
        let apiUrl = [];
        apiUrl.push('//fonts.googleapis.com/css?family=');
        apiUrl.push(font.family.replace(/ /g, '+'));
        apiUrl.push(':400,400i,700,700i');
        return apiUrl.join('');
    }
};

export default googleFonts;
