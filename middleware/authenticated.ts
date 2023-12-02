import { useAuthStore } from '~/stores/useAuthStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();


  function isAllowedAccess(userRole, routeName) {
    if (routeName === 'examination' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'examination-id' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'examination-create' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'gold' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'gold-id' && (userRole === 'seller' || userRole === 'owner' || userRole === 'customer')) {
      return true;
    } else if (routeName === 'gold-create' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'pawn' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'pawn-id' && (userRole === 'seller' || userRole === 'owner' || userRole === 'customer')) {
      return true;
    } else if (routeName === 'pawn-add' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'pawn-create' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'withdrawlist-pawnowner' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'goldpawn-paymentowner' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'withdrawlist-financelistseller' && userRole === 'owner') {
      return true;
    } else if (routeName === 'withdrawlist-financelistme' && userRole === 'seller' ) { 
      return true;
    } else if (routeName === 'withdrawlist-financedata' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'withdrawlist-installmentsoffline' && userRole === 'seller' ){ 
      return true;
    } else if (routeName === 'withdrawlist-selleroffline' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    } else if (routeName === 'accountant' && (userRole === 'owner' || userRole === 'accountant')) {
      return true;
    } else if (routeName === 'customer-myexamination' && userRole === 'customer') {
      return true;
    } else if (routeName === 'customer-mypawn' && userRole === 'customer') {
      return true;
    } else if (routeName === 'customer-pawnamount' && userRole === 'customer') {
      return true;
    }  else if (routeName === 'customer-mygold' && userRole === 'customer') {
      return true;
    }  else if (routeName === 'customer' && userRole === 'owner') {
      return true;
    } else if (routeName === 'ownerandSeller-pawnitemform' && (userRole === 'seller' || userRole === 'owner')) {
      return true;
    }else if (routeName === 'auth-me' && (userRole === 'seller' || userRole === 'owner'|| userRole === 'customer')) {
      return true;
    }else if (routeName === 'accountant' && (userRole === 'accountant' || userRole === 'owner')) {
      return true;
    }else if (routeName === 'services' && (userRole === 'accountant' || userRole === 'owner' || userRole === 'seller' || userRole === 'customer')) {
      return true;
    }




    return false;
  }
  console.log(to.name, authStore.userRole, authStore.isLogin);

  if (process.client) {
    if (!authStore.isLogin) {
      sessionStorage.setItem('preLoginRoute', to.fullPath);

      if (to.name !== 'login') {
        console.log(to.name);
        return navigateTo('/auth/login');
      }
    } else {
      if (!isAllowedAccess(authStore.userRole, to.name)) {
        console.log(to.name, authStore.userRole, authStore.isLogin)
        return navigateTo('/404Page');

      }
    }

    console.log(to.name, authStore.userRole, authStore.isLogin);
  }

});
