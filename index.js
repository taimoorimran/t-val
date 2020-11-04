module.exports = function globalInputValidator(value, config) {
    if (value == null) return true;
    if (value.length == 0) return true;
    if ('minLength' in config && value.length < config.minLength) return;
    if ('maxLength' in config && value.length >= config.maxLength) return;
    if ('length' in config && value.length > config.length && value.length != config.length) return;
    var config_og = {
        allowNumeric: false,
        specialCharacters: {
            allowAll: false,
            onlyAllowThese: ""
        },
        characters: {
            allowUpper: false,
            allowLower: false
        },
        dontAllowSpace: false,
    };
    config_og = { ...config_og, ...config };
    var _pattern = "";
    if (!config_og.dontAllowSpace) _pattern += " ";
    if (config_og.characters.allowLower) _pattern += "a-z";
    if (config_og.characters.allowUpper) _pattern += "A-Z";
    if (config_og.allowNumeric) _pattern += "0-9";
    if (config_og.specialCharacters.allowAll) _pattern += "!@#$%^&*";
    if (!config_og.specialCharacters.allowAll && config_og.specialCharacters.onlyAllowThese.length > 0) _pattern += config_og.specialCharacters.onlyAllowThese;
    var _regex = new RegExp("[" + _pattern + "]$", "gm");
    return _regex.test(value);
};