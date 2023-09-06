# LNA-PRODUCT-CARD

Este es un paquete de pruebas de despliegue en NPM

### Lucas Alvarez

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'lna-product-card-ts';
```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 4,
        // maxCount: 10
    }}
>
    {
        ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```