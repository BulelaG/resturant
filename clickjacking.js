if (top !== self) {
    // If framed, break out of the frame
    top.location = self.location;
}

// Set X-Frame-Options header for modern browsers
if (window.self === window.top) {
    const metaTag = document.createElement('meta');
    metaTag.httpEquiv = 'X-Frame-Options';
    metaTag.content = 'DENY';
    document.head.appendChild(metaTag);
}