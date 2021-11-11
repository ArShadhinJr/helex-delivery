import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [ user, setUser ] = useState( {} );
  const [ loading, setLoading ] = useState( true );
  const [ name, setName ] = useState( '' );
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const [ error, setError ] = useState( '' );
  const [ isLogin, setIsLogin ] = useState( false );

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const toggleLogin = e => {
    setIsLogin( e.target.checked )
  }

  const handleNameChange = e => {
    setName( e.target.value );
  }
  const handleEmailChange = e => {
    setEmail( e.target.value );
  }

  const handlePasswordChange = e => {
    setPassword( e.target.value )
  }

  const setUserName = () => {
    updateProfile( auth.currentUser, { displayName: name } )
      .then( result => { } )
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log( email, password );

    if ( password.length < 6 ) {
      setError( 'Password Must be at least 6 characters long.' )
      return;
    }
    if ( !/(?=.*[A-Z].*[A-Z])/.test( password ) ) {
      setError( 'Password Must contain 2 upper case' );
      return;
    }

    if ( isLogin ) {
      processLogin( email, password );
    }
    else {
      registerNewUser( email, password );
    }

  }

  const processLogin = ( email, password ) => {
    signInWithEmailAndPassword( auth, email, password )
      .then( result => {
        const user = result.user;
        console.log( user );
        setError( '' );
      } )
      .catch( error => {
        setError( error.message );
      } )
  }

  const registerNewUser = ( email, password ) => {
    createUserWithEmailAndPassword( auth, email, password )
      .then( result => {
        const user = result.user;
        console.log( user );
        setError( '' );
        setUserName();
      } )
      .catch( error => {
        setError( error.message );
      } )
  }

  const handleLogIn = e => {
    e.preventDefault();
    console.log( email, password );
    signInWithEmailAndPassword( auth, email, password )
      .then( result => {
        const user = result.user;
        console.log( user );
      } )
      .catch( error => {
        setError( error.message );
      } )
  }


  const signInUsingGoogle = () => {
    return signInWithPopup( auth, googleProvider )
      .finally( () => { setLoading( false ) } );
  }

  const logOut = () => {
    setLoading( true );
    signOut( auth )
      .then( () => {
        setUser( {} )
      } )
      .finally( () => setLoading( false ) )
  }

  // observe whether user auth state changed or not
  useEffect( () => {
    const unsubscribe = onAuthStateChanged( auth, ( user ) => {
      if ( user ) {
        setUser( user );
      }
      else {
        setUser( {} );
      }
      setLoading( false );
    } );
    return () => unsubscribe;
  }, [] )

  return {
    user,
    loading,
    signInUsingGoogle,
    logOut,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    registerNewUser,
    handleRegistration,
    toggleLogin,
    error,
    handleLogIn
  }
}

export default useFirebase;