import { useState, useEffect } from 'react'
import { API_KEY, API_URL} from '../config'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'
import { Cart } from './Cart'
import { BasketList } from './BasketList'
import { Alert } from './Alert'

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');


    const orderHandler = (item) => {
        if (order.length === 0) {
            setOrder([item])
        } else {
            const ind = order.findIndex(el => (el.id === item.id))
            if (ind < 0) {
                setOrder([...order, item])
            } else {
                order[ind].quantity += 1
                
                setOrder([...order])
            }
        }
        setAlertName(item.name)
    }


    const busketShowHandler = () => {
        setBasketShow(!isBasketShow)
    }


    const orderAdd = (id) => {
        const ind = order.findIndex(item => (item.id === id))
        order[ind].quantity += 1
        setOrder([...order])
    }

    const orderSub = (id) => {
        const ind = order.findIndex(item => (item.id === id))
        order[ind].quantity -= 1
        if (order[ind].quantity === 0) {
            let filteredOrder = order.filter(item => item.id !== id)
            setOrder(filteredOrder)
        } else {
            setOrder([...order])
        }
    }

    const orderRemove = (id) => {
        let filteredOrder = order.filter(item => item.id !== id)
        setOrder(filteredOrder)
    }

    const closeAlert = () => {
        setAlertName('')
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
        .then(response => response.json())
        .then(data => {data.shop && setGoods(data.shop);
            setLoading(false)
        })
    }, [])
    return <main className="container content">
        { isBasketShow && <BasketList order={order} busketShowHandler = {busketShowHandler} orderRemove={orderRemove} orderAdd={orderAdd} orderSub={orderSub} /> }
        <Cart quantity={order.length} busketShowHandler = {busketShowHandler}/>
        {
            loading ? <Preloader /> : <GoodsList goods={goods} orderHandler={orderHandler}/>
        }
        {
            alertName && <Alert name={alertName} closeAlert={closeAlert} />
        }
    </main>
}

export {Shop}