import './Footer.css'//imports..
import React from 'react'

export default props =>//componente funcional =>função arrow
    <footer className="footer">{/*tag footer q tem class footer */}
        <span>{/*rodapé .da pagina */}
            Desenvolvido com <i className="fa fa-heart text-danger"></i> por{/*fa fa-heart=font awesome text coração emoji-danger:fica vermelho uso bootstrap*/}
            <strong> Cod<span className="text-danger">3</span>r</strong>{/*cod dentro strong fica negrito danger text=cor vermelha em 3 */}
        </span>
    </footer>