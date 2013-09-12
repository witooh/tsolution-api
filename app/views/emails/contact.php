<body>

    Name: <?php echo $data['name'] ?><br/>
    Email <?php echo $data['email'] ?><br/>
    Message
    <p><?php echo str_replace("\n", '<br/>', $data['message']) ?></p>
</body>
