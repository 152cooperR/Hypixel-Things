<html>
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/bootstrap-theme.min.css"/>
    <link rel="stylesheet" href="Report.css">
    <title>Easy Report</title>
</head>
<body>
<nav class="navbar navbar-default">


    <div class="navbar-header">
        <a class="navbar-brand" href="Report.php">Reporter</a>
        <a class="navbar-brand">|</a>
        <a class="navbar-brand" href="SkinLookup.php">Skin Lookup</a>
    </div>
</nav>

<div class="jumbotron">
   <div class="container">
       <p style="color: #00a3ff;">Easy Report | By: Coooper</p>
       <p>Just type in the information of the user, and copy the generated report.</p>
   </div>
</div>



<div class="container">
  <div class="col-md-5">
      <form class="form-group">
          <input class="form-control small" tabindex="1" type="text" placeholder="IGN" id="ign" name="ign"><br>
          <input class="form-control"  tabindex="2" type="text" placeholder="Reason" id="reason"><br>
          <h5>Rank</h5>
          <select class="form-control"  tabindex="3" id="rank">
              <option>       </option>
              <option>Default</option>
              <option>VIP</option>
              <option>VIP+</option>
              <option>MVP</option>
              <option>MVP+</option>
          </select><br>
          <h5>Bans</h5>
          <select class="form-control" id="Bans" onclick="refresh()">

              <?php for($bans = 0; $bans<51; $bans++){

                  echo('<option>'. $bans . '</option>');

              } ?>

          </select>

          <h5>Mutes</h5>
          <select  class="form-control" id="Mutes" onclick="refresh()">

              <?php for($mutes = 0; $mutes<51; $mutes++){

                  echo('<option>'. $mutes . '</option>');

              } ?>

          </select>
          <h5>Kicks</h5>
          <select class="form-control" id="Kicks" onclick="refresh()">

              <?php for($Kicks = 0; $Kicks<51; $Kicks++){

                  echo('<option>'. $Kicks . '</option>');

              } ?>

          </select><br/><br/>
          <input class="form-control"  tabindex="5" type="text" placeholder="Proof" id="proof"><br>
          <input class="form-control"  tabindex="6" type="reset" value="Reset Fields" onclick="mutes2 = ''; bans2 = ''; kicks2 = '';"><br>
      </form>
  </div>
    <div class="col-lg-5">
        <div class="form-group">
            <input type="checkbox" id="requesting"> Requesting <br/><br/>

           <select id="select" class="form-control">
                <option>Ban</option>
                <option>Longer Mute</option>
            </select><br/>

            <span hidden="" id="report"></span>
        <span id="reportDisplay"></span>
            <button class="form-control btn-primary" id="click-to-copy">Copy Report To Clipboard</button><br><br>
            <button class="form-control btn-primary" onclick="insertSkinAsProof()">Insert skin as proof</button><hr>
        </div>
    </div>
    <div class="col-md-2">
        <span id="name">Steve`s Skin</span>
        <img height="180" width="90" src="" id="skin">

    </div>

</div>

    <script src="js/jquery-2.1.3.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="ZeroClip/ZeroClipboard.min.js"></script>
    <script src="main.js"></script>

    <script src="report.js"></script>

</body>


</html>