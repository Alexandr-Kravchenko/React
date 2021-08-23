function createElement(tagOrFn, props, ...children) {
    let element;
    if (typeof tagOrFn === 'string') {
        element = document.createElement(tagOrFn);

        for (let attr in props) {
            let value = props[attr];
            if (typeof value === 'function') {
                element[attr] = value;
            } else {
                element.setAttribute(attr, value);
            }
        }

    } else {
        element = tagOrFn(props);
    }

    for (let child of children) {
        if (child === null) continue;
        if (Array.isArray(child)) {
            element.append(...child);
        } else {
            element.append(child);
        }
    }

    return element;
}