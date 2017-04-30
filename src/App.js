import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>True Wing Chun</h1>
                <h2>纯詠春</h2>
                <h3>Altona Hamburg, Detuschland</h3>
                <div className="info-container">
                    <p>
                        Wing Chun nach traditionelle Art. Dienstags von 19:30 bis 20:45, oder Donnerstags von 20:00 bis zum 21:30. Komm Mal vorbei um der richtige Art zu erleben.
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
}

export default App;
