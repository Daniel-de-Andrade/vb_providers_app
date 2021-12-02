import React from "react";

function Login() {
  return (
    <div
      className="bg-purple p-5 text-center text-white d-flex justify-content-center align-items-center"
      //   style="height: 100vh;"
    >
      <div>
        <p className="mb-4">
          <img src="/assets/img/vb.png" alt="" className="w-100" />
        </p>
        <form name="loginForm" ng-submit="signIn(login)">
          <div className="text-start mb-3">
            <label for="loginEmail">E-mail</label>
            <input
              type="email"
              name="email"
              ng-model="login.email"
              ng-required="true"
              id="loginEmail"
              className="form-control rounded-pill"
            />
          </div>
          <div className="text-start mb-2">
            <label for="loginPassword">Senha</label>
            <input
              type="password"
              name="password"
              ng-model="login.password"
              ng-required="true"
              id="loginPassword"
              className="form-control rounded-pill"
            />
          </div>
          <p className="small text-start">
            <a href="/recover" className="text-decoration-none mb-4">
              Esqueceu sua senha?
            </a>
          </p>
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill mb-5"
            ng-disabled="loginForm.$invalid"
          >
            <span ng-show="!loading">Entrar</span>
            <span ng-show="loading">Entrando...</span>
          </button>
          <p>
            <a href="/signup" className="text-white text-decoration-none small">
              Não tem uma conta?{" "}
              <span className="fw-bold">Cadastre-se agora</span>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
