const defaultSettings = {
    theme: "light",
    notifications: { email: true, sms: false },
    features: { analytics: true, betaAccess: false }
};

const userSettings = {
    theme: "dark",
    notifications: { sms: true } // User ne email ke baare me kuch nahi bola!
};

const newSetting={
    ...defaultSettings,
    theme:userSettings.theme,
    notifications:{...defaultSettings.notifications,...userSettings.notifications}
}
console.log(JSON.stringify(newSetting,null,2))