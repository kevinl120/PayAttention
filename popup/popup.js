function clearMemory() {
    chrome.storage.sync.clear();
}

function setZero() {
    var obj = {};
    obj["www.youtube.com"] = 0;
    chrome.storage.sync.set(obj);
}
