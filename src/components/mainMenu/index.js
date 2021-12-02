function MainMenu() {

    return <div id="mainMenu" className={`fixed-bottom py-3 px-5 d-flex justify-content-between align-items-center ${ window.location.pathname === '/menu' ? 'bg-purple text-white' : 'bg-white text-purple'}`}>
        <p className={`mb-0 ps-4 pe-4 text-center border-end ${ window.location.pathname === '/menu' ? 'border-white' : 'border-purple'}`}>
            <a href="/" className={`text-decoration-none d-block ${ window.location.pathname === '/menu' ? 'text-white' : 'text-purple'}`}>
                <i className="fas fa-home"></i>
                <small className="small">Home</small>
            </a>
        </p>
        <p className={`mb-0 px-4 text-center border-end ${ window.location.pathname === '/menu' ? 'border-white' : 'border-purple'}`}>
            <a href="/event/requests" className={`text-decoration-none d-block ${ window.location.pathname === '/menu' ? 'text-white' : 'text-purple'}`} ng-class="{'text-purple' : activeRoute != '/menu', 'text-white' : activeRoute == '/menu'}">
                <i className="fas fa-question-circle"></i>
                <small className="small">Solicitações</small>
            </a>
        </p>
        <p className={`mb-0 px-4 text-center border-end ${ window.location.pathname === '/menu' ? 'border-white' : 'border-purple'}`}>
            <a href="/event/list" className={`text-decoration-none d-block ${ window.location.pathname === '/menu' ? 'text-white' : 'text-purple'}`}>
                <i className="fas fa-calendar-alt"></i>
                <small className="small">Agenda</small>
            </a>
        </p>
        <p className="mb-0 px-4 text-center">
            <a href="/menu" className={`text-decoration-none d-block ${ window.location.pathname === '/menu' ? 'text-white' : 'text-purple'}`}>
                <i className="fas fa-user-circle"></i>
                <small className="small">Perfil</small>
            </a>
        </p>
    </div>
}

export default MainMenu