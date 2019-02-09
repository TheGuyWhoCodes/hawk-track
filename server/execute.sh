#~ /bin/sh

howmanypeoplearearound -a wlp2s0 -o ~/hawk-track/server/output.json
ifconfig wlp2s0 
iwconfig wlp2s0 KU-Guest
dhclient wlp2s0
node ~/hawk-track/server/main.js