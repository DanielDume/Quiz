# QuizApp

Run all commands from git bash (https://git-scm.com/downloads)

Make sure you have the latest versions of *Virtual Box* and *Vagrant* installed.
After installing *Vagrant* run: `vagrant plugin install vagrant-vbguest`.

To clone the repo:
`git clone https://github.com/DanielDume/QuizApp.git`

To start the server (while in QuizzApp folder):
`$ vagrant up`

To stop the server:
`$ vagrant halt`

To reload the server:
`$ vagrant ssh
 $ cd /vagrant/BarFinder
 $ make update`

To view server logs and other info:
`$ sudo -i pm2 monit`

The web page can be found on *10.10.10.10:3000/*.
