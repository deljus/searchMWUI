var BASE_URL = 'http://localhost/',

    api = {
        authSite: BASE_URL + 'api/auth',
        createSearchTask: BASE_URL + 'api/task/create/1',
        prepareTask: BASE_URL + 'api/task/prepare/',
        result: BASE_URL + 'api/task/model/',
        additives: BASE_URL + 'api/resources/additives',
        models: BASE_URL + 'api/resources/models',
        upload: BASE_URL + 'api/task/upload/0',
        saveTask: BASE_URL + 'api/task/results/'
    };

export default api;