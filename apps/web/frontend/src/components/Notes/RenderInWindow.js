import ReactDOM from 'react-dom';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function RenderInWindow(props) {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);

  // `copyStyles`, `fixUrlForRule` and `getKeyFrameText` taken from
  // https://github.com/rmariuzzo/react-new-window/blob/master/src/NewWindow.js
  const fixUrlForRule = useCallback(
    (cssRule) =>
      cssRule.cssText
        .split('url(')
        .map((line) => {
          if (line[1] === '/') {
            return `${line.slice(0, 1)}${window.location.origin}${line.slice(
              1
            )}`;
          }
          return line;
        })
        .join('url('),
    []
  );

  const getKeyFrameText = useCallback((cssRule) => {
    const tokens = ['@keyframes', cssRule.name, '{'];
    Array.from(cssRule.cssRules).forEach((cssRule) => {
      // type === CSSRule.KEYFRAME_RULE should always be true
      tokens.push(cssRule.keyText, '{', cssRule.style.cssText, '}');
    });
    tokens.push('}');
    return tokens.join(' ');
  }, []);

  const copyStyles = useCallback(
    (source, target) => {
      // Store style tags, avoid reflow in the loop
      const headFrag = target.createDocumentFragment();

      Array.from(source.styleSheets).forEach((styleSheet) => {
        // For <style> elements
        let rules;
        try {
          rules = styleSheet.cssRules;
        } catch (err) {
          console.error(err);
        }
        if (rules) {
          // IE11 is very slow for appendChild, so use plain string here
          const ruleText = [];

          // Write the text of each rule into the body of the style element
          Array.from(styleSheet.cssRules).forEach((cssRule) => {
            const { type } = cssRule;

            // Skip unknown rules
            if (type === CSSRule.UNKNOWN_RULE) {
              return;
            }

            let returnText = '';

            if (type === CSSRule.KEYFRAMES_RULE) {
              // IE11 will throw error when trying to access cssText property, so we
              // need to assemble them
              returnText = getKeyFrameText(cssRule);
            } else if (
              [CSSRule.IMPORT_RULE, CSSRule.FONT_FACE_RULE].includes(type)
            ) {
              // Check if the cssRule type is CSSImportRule (3) or CSSFontFaceRule (5)
              // to handle local imports on a about:blank page
              // '/custom.css' turns to 'http://my-site.com/custom.css'
              returnText = fixUrlForRule(cssRule);
            } else {
              returnText = cssRule.cssText;
            }
            ruleText.push(returnText);
          });

          const newStyleEl = target.createElement('style');
          newStyleEl.textContent = ruleText.join('\n');
          headFrag.appendChild(newStyleEl);
        } else if (styleSheet.href) {
          // for <link> elements loading CSS from a URL
          const newLinkEl = target.createElement('link');

          newLinkEl.rel = 'stylesheet';
          newLinkEl.href = styleSheet.href;
          headFrag.appendChild(newLinkEl);
        }
      });

      target.head.appendChild(headFrag);
    },
    [fixUrlForRule, getKeyFrameText]
  );

  useEffect(() => {
    // Create container element on client-side
    setContainer(document.createElement('div'));
  }, []);

  useEffect(() => {
    // When container is ready
    if (container) {
      // Create window
      newWindow.current = window.open(
        '',
        '',
        'width=600,height=400,left=200,top=200'
      );

      newWindow.current.document.head.innerHTML =
        window.document.head.innerHTML;
      // Append container
      newWindow.current.document.body.appendChild(container);

      // Copy styles
      setTimeout(() => {
        copyStyles(document, newWindow.current.document);
      }, 0);

      newWindow.current.addEventListener('beforeunload', (e) => {
        e.preventDefault();
        props.closeMarkdownWindow();
      });

      // Return cleanup function
      return () => newWindow.current?.close();
    }
  }, [container, copyStyles, props]);

  return container && ReactDOM.createPortal(props.children, container);
}
