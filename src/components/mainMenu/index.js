function MainMenu() {
    return <div id="mainMenu" ng-cloak ng-show="vbData.session.status == 'loggedIn'" className="fixed-bottom py-3 px-5 d-flex justify-content-between align-items-center" ng-class="{'bg-white text-purple' : activeRoute != '/profile', 'bg-purple text-white' : activeRoute == '/profile'}">
        <p className="mb-0 ps-4 pe-4 text-center border-end" ng-class="{'border-purple' : activeRoute != '/profile', 'border-white' : activeRoute == '/profile'}">
            <a href="/" className="text-decoration-none d-block" ng-class="{'text-purple' : activeRoute != '/profile', 'text-white' : activeRoute == '/profile'}">
                <i className="fas fa-home"></i>
                <small className="small">Home</small>
            </a>
        </p>
        <p className="mb-0 px-4 text-center border-end" ng-class="{'border-purple' : activeRoute != '/profile', 'border-white' : activeRoute == '/profile'}">
            <a href="/agenda/requests" className="text-decoration-none d-block" ng-class="{'text-purple' : activeRoute != '/profile', 'text-white' : activeRoute == '/profile'}">
                <i className="fas fa-question-circle"></i>
                <small className="small">Solicitações</small>
            </a>
        </p>
        <p className="mb-0 px-4 text-center border-end" ng-class="{'border-purple' : activeRoute != '/profile', 'border-white' : activeRoute == '/profile'}">
            <a href="/agenda" className="text-decoration-none d-block" ng-class="{'text-purple' : activeRoute != '/profile', 'text-white' : activeRoute == '/profile'}">
                <i className="fas fa-calendar-alt"></i>
                <small className="small">Agenda</small>
            </a>
        </p>
        <p className="mb-0 px-4 text-center">
            <a href="/profile" className="text-decoration-none d-block" ng-class="{'text-purple' : activeRoute != '/profile', 'text-white' : activeRoute == '/profile'}">
                <i className="fas fa-user-circle"></i>
                <small className="small">Perfil</small>
            </a>
        </p>
    </div>
}

export default MainMenu