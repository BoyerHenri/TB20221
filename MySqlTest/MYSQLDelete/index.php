<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update</title>
</head>
<body>
<form action ="ScriptModif.php" method="post">

    <div>
        <label>Identifiant de la station</label><br>
        <input type="text" value=""  name="id"> 
    </div>
    <br>

    <div>
        <label for="nom_for_label">Nom de la station</label><br>
        <input type="text" value="" name="nom" id="nom_for_label">
    </div>
    <br>

    <div>
        <label for="altitude_for_label">Altitude</label><br>
        <input type="text" value=""  name="altitude" id="altitude_for_label">
    </div>

    <br>

    <input type="submit" value="Valider les modifications">

</form>
</body>
</html>