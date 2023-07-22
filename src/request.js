const API_KEY = 'eyJhbGciOiJIUzI1NiJ9';
const API_TOKEN ='eyJhdWQiOiI1NTUyZmRlMGVmMzE1MDQwZTA3M2FjMDc3NzQ4MGIwNiIsInN1YiI6IjY0YTZhOGMzY2FlNjMyMDExZmEzMjMwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._DaUkZO060ZW-I63X4TkxACVu0cLawgcS2UdSo1sOKc';

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}.${API_TOKEN}`
    }
}

