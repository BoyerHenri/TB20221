-- 1 Liste des contacts français
-- SELECT CompanyName AS "SOCIETE",ContactName AS "CONTACT",ContactTitle AS "FONCTION",Phone AS "TELEPHONE"
-- FROM northwind.suppliers
-- WHERE Country="France"

-- 2 Produits vendus par le fournisseur "Exotic Liquids"
-- SELECT ProductName AS "PRODUITS",UnitPrice AS "PRIX"
-- FROM northwind.products
-- JOIN northwind.suppliers
-- WHERE CompanyName="Exotic Liquids"

-- 3 Nombre de produits vendus par les fournisseurs Français dans l'ordre décroissant
-- SELECT CompanyName AS "FOURNISSEURS",COUNT(ProductName) AS "NBRE PRODUITS"
-- FROM northwind.suppliers 
-- JOIN northwind.products 
-- ON suppliers.SupplierID=products.SupplierID
-- WHERE Country="France"
-- GROUP BY CompanyName 
-- ORDER BY COUNT(ProductName)DESC

-- 4 Liste des clients Français ayant plus de 10 commandes
-- SELECT CompanyName AS "CLIENT",COUNT(OrderID) AS "NBRE COMMANDES"
-- FROM northwind.customers 
-- JOIN northwind.orders 
-- ON customers.CustomerID=orders.CustomerID
-- WHERE Country="France"
-- GROUP BY CompanyName
-- HAVING COUNT(OrderID)>10 

-- 5 Liste des clients ayant un CA>30 000
-- SELECT CompanyName AS "CLIENT",SUM(UnitPrice*Quantity) AS "CHIFFRE D'AFFAIRES"
-- FROM northwind.customers
-- JOIN northwind.orders
-- ON customers.CustomerID=orders.CustomerID
-- JOIN northwind.`order details`
-- ON orders.OrderID=`order details`.OrderId
-- GROUP BY CompanyName
-- HAVING SUM(UnitPrice*Quantity)>30000

-- 6 Liste des pays dont les clients ont passé commande de produits fournis par "Exotic Liquids"
-- SELECT ShipCountry AS "PAYS"
-- FROM northwind.orders
-- JOIN northwind.`order details` ON northwind.`order details`.OrderID = northwind.orders.OrderID 
-- JOIN northwind.products ON northwind.products.ProductID=northwind.`order details`.ProductID 
-- JOIN northwind.suppliers  ON northwind.suppliers.SupplierID=northwind.products.SupplierID
-- WHERE northwind.suppliers.CompanyName="Exotic Liquids"
-- GROUP BY ShipCountry

-- 7 Montant des ventes de 1997
-- SELECT SUM(UnitPrice*Quantity) AS "MONTANT VENTES 97"
-- FROM `Order Details`
-- JOIN northwind.orders ON `Order Details`.OrderID=orders.OrderID
-- WHERE OrderDate BETWEEN("1997-01-01 00:00:00") AND ("1997-12-31 00:00:00")

-- 8 Montant des ventes de 1997 mois par mois
-- SELECT MONTH(OrderDate) AS "MOIS 97", SUM(UnitPrice*Quantity) AS "MONTANT VENTES"
-- FROM northwind.orders
-- JOIN `Order Details` ON `Order Details`.OrderID=orders.OrderID
-- WHERE YEAR(OrderDate)="1997"
-- GROUP BY MONTH(OrderDate)

-- 9 – Depuis quelle date le client "Du monde entier" n’a plus commandé ?
-- SELECT MAX(OrderDate) AS "DATE DERNIERE COMMANDE"
-- FROM northwind.orders
-- join northwind.customers ON orders.CustomerID=customers.CustomerID
-- WHERE northwind.customers.CompanyName="Du monde entier"

-- 10 Quel est le délai moyen de livraison en jours ?
SELECT round(avg(DATEDIFF(ShippedDate,OrderDate))) AS "DELAI MOYEN DE LIVRAISON EN JOURS"
FROM northwind.orders
 

