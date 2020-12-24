export default function ApiId(id) {
    const key = '18956584-3ac01e2418e4c39c7eb5dacd9';
    const url = `https://pixabay.com/api/?id=${id}&key=${key}`;
        return fetch(url).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(new Error('Картинки с таким именем отсутсвуют'));
    });

};
