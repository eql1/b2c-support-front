function Home() {
    return (
        <div>Authenticated as {localStorage.getItem('token')}</div> // todo: create separate class for get token function
        // todo: implement fetch user data (except password)
    );
}

export default Home;