import back from '../../assets/img/back.svg'
import blank from '../../assets/img/blank.png'

function AdsList(){
    return <>
    <div className="p-4 py-5">

    <a href="/menu">
        <img src={back} alt="" className="mb-4" />
    </a>

    <h4 className="text-muted text-uppercase text-center pb-4">
        <i className="fas fa-bullhorn"></i> Meus anúncios
    </h4>

    <div className="mb-4">
        <a href="/ads/details" ng-repeat="ads in vbData.adsList"
            className="d-flex text-muted text-decoration-none justify-content-start align-items-center border rounded-pill mb-3 shadow-sm p-3">
            <img src={blank} className="rounded-circle me-3" height="40" alt="" />
            <div className="text-truncate">
                <p className="mb-0 text-truncate text-dark">
                    Titulo
                </p>
                <p className="mb-0 text-truncate pe-3">
                    <small className="text-muted small">
                        <span ng-repeat="service in ads.services">
                            Service
                        </span>
                    </small>
                </p>
            </div>
        </a>
    </div>

    <a href="/ads/create" className="btn btn-success w-100 rounded-pill">
       <i className="fas fa-plus"></i> Criar anúncio
    </a>
</div>
    </>
}

export default AdsList