import React from "react";

function Login() {
  return (
    <div
      class="bg-purple p-5 text-center text-white d-flex justify-content-center align-items-center"
      style="height: 100vh;"
    >
      <div>
        <p class="mb-4">
          <img src="/assets/img/vb.png" alt="" class="w-100" />
        </p>
        <form name="loginForm" ng-submit="signIn(login)">
          <div class="text-start mb-3">
            <label for="loginEmail">E-mail</label>
            <input
              type="email"
              name="email"
              ng-model="login.email"
              ng-required="true"
              id="loginEmail"
              class="form-control rounded-pill"
            />
          </div>
          <div class="text-start mb-2">
            <label for="loginPassword">Senha</label>
            <input
              type="password"
              name="password"
              ng-model="login.password"
              ng-required="true"
              id="loginPassword"
              class="form-control rounded-pill"
            />
          </div>
          <p class="small text-start">
            <a href="/recover" class="text-decoration-none mb-4">
              Esqueceu sua senha?
            </a>
          </p>
          <button
            type="submit"
            class="btn btn-primary w-100 rounded-pill mb-5"
            ng-disabled="loginForm.$invalid"
          >
            <span ng-show="!loading">Entrar</span>
            <span ng-show="loading">Entrando...</span>
          </button>
          <p>
            <a href="/signup" class="text-white text-decoration-none small">
              Não tem uma conta? <span class="fw-bold">Cadastre-se agora</span>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
