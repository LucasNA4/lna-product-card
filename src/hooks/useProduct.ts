import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";


interface useProductProps {
    product: Product;
    value?: number;
    initialValues?: InitialValues
    onChange?: ( args: onChangeArgs ) => void;
}

export const useProduct = ({ product, value = 0, onChange, initialValues }: useProductProps ) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);

    const increaseBy = ( value: number ) => {
        if ( initialValues?.maxCount && counter + value > initialValues.maxCount ) return;

        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );
        
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    useEffect(() => {
        if ( !isMounted.current ) return;
        else isMounted.current = true;

        setCounter( value );
    }, [value])    
    
    return {
        counter,
        isMaxCountReached: initialValues?.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }
}
