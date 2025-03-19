import 'react';

function App() {
    return (
        <div className="container">
            <div className="background"></div>
            <div className="content">
                <p className="title">
                    <span className="typing">Wartungsarbeiten</span>
                </p>
                <button className="impressum-button" onClick={() => window.location.href = 'https://schmid-koenig.de/impressum-n/'}>
                    Impressum
                </button>
            </div>
        </div>
    );
}

export default App;