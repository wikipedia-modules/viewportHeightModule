module.exports = function viewportHeight(data) {

  const processStyle = (data) => {
    const endOfStyleBlock = data.indexOf('</style>')
    const styleToInsert = `
/* Module: Viewport height on: ${new Date()}*/
@media (max-width: 1400px) and (max-height: 800px) {
    .frb-form .frb-methods {
        margin-top: 5px;
    }
}

@media (max-width: 1400px) and (max-height: 800px) {
    .frb-footer {
        font-size: 12px;
    }
}

@media (max-width: 1400px) and (max-height: 800px) {
    button.frb-submit {
        height: 45px;
    }
}

@media (max-width: 1400px) and (max-height: 800px) {
    .frb-label {
        height: 45px;
    }
}

@media (max-width: 1400px) and (max-height: 800px) {
    .frb {
        margin-bottom: 5px;
    }
}

@media (max-width: 1400px) and (max-height: 800px) {
    .frb-message { font-size: 15px; }
    html[lang="en"] .frb-message { font-size: 15px; }
}
/* Module: Viewport height */
    `;

    return data.substring(0, endOfStyleBlock) + '\n' + styleToInsert + '\n\n' + data.substring(endOfStyleBlock)

  };

  return processStyle(data)
}
