const removeFromArray = function(list, ...items) {
    if (items.length === 0) {
        return list
    }

    for (const item of items) {
        itemIndex = list.indexOf(item)
        if (itemIndex !== -1) {
            list.splice(itemIndex, 1)
        }
    }

    return list
};

// Do not edit below this line
module.exports = removeFromArray;
