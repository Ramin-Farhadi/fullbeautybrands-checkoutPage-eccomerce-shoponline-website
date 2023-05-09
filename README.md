# FullBeauty Brands Ecommerce Checkout Page (Not Official) | React Project

This project is a checkout page for FullBeauty Brands, an online ecommerce store based in NYC. Please note that this is not an official page of FullBeauty Brands; I created it for my own practice.

## You can review the production of the project by following this [link](http://fbbrandschallenge.s3-website-us-east-1.amazonaws.com/).

```diff
+ http://fbbrandschallenge.s3-website-us-east-1.amazonaws.com/
```

## Description

The project focuses on the checkout page of FullBeauty Brands, which is the final step before placing an order. The page is fully responsive and includes the following features:

```diff
! Two navigation bars:

one fixed and the other sticky.

! Shipping Address Section:

The "Change Shipping Address" function is working, allowing you to update the shipping details.

! Payment Method Section:

The buttons in this section are for design purposes only and do not have any functionality.

! Review Your Order Section:

This section includes the following features:

1. Hovering over product photos will cause them to scale up slightly.
2. Changing the quantity of Product A (Blue Jacket) triggers a $20 discount for every 2 items, which is subtracted from the list price.
3. Changing the quantity of Product B (Leather Coat) triggers a free item for every 2 selections.
4. The section is fully responsive.
5. Subtotal for each item is calculated, and any applicable discounts are subtracted from the subtotal.
6. Data from all items is added to a table, which is then sent to the Order Summary section.

! Order Summary Section:

The object sent from the Review Order section is stored as a state here. Shipping and tax are applied to the subtotal, and the total order amount is displayed as OrderTotal.

@@ Note: @@

The project and website mentioned above are for demonstration purposes and do not involve actual transactions with FullBeauty Brands.
```
