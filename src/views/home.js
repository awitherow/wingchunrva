import React from 'react';

export default function Home() {
    return (
        <div className="page">
            <h1>Wing Chun Altona</h1>
            <h2>詠春</h2>
            <div className="info-container">
                <p>
                    Wing Chun nach traditionelle Art. Dienstags von 19:00 bis 20:45, oder Donnerstags von 20:00 bis zum 21:30. Komm Mal vorbei um der authentische Art zu erleben.
                </p>
                <div className="button-container">
                    <a
                        href="mailto:Ayipmanwt@outlook.de?subject=Interesse%20Auf%20Wing%20Chun%20Altona"
                        target="_blank"
                        className="button"
                    >
                        Interesse drauf?
                    </a>
                    <a
                        href="https://goo.gl/maps/rpodfu9osBm"
                        target="_blank"
                        className="button"
                    >
                        Kartenansicht
                    </a>
                </div>
                <p>
                    Auch auf
                    {' '}
                    <a href="https://www.facebook.com/Selbstverteidigung-Wing-Chun-Kampfkunst-Hamburg-Altona-281928865489557/">
                        Facebook
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
