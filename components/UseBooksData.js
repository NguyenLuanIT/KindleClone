import { useState, useEffect } from "react";
import database from '@react-native-firebase/database';

export default function useBooksData() {
    const [books, setBooks] = useState({
        books: []
    })
    useEffect(() => {
        database().ref('/books').once('value', (snapshot) => {
            let books = []
            snapshot.forEach((bookSnapshot) => {
                books.push(bookSnapshot.val())
                // console.log(books.push(bookSnapshot.val()))
            });
            setBooks({ books })
        })
    })
    return [books];
}

