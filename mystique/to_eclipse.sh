# Copyright (c) 2012-2017 "JUSPAY Technologies"
# JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
# 
# This file is part of JUSPAY Platform.
# 
# JUSPAY Platform is free software: you can redistribute it and/or modify
# it for only educational purposes under the terms of the GNU Affero General
# Public License (GNU AGPL) as published by the Free Software Foundation,
# either version 3 of the License, or (at your option) any later version.
# For Enterprise/Commerical licenses, contact <info@juspay.in>.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
# be liable for all damages without limitation, which is caused by the
# ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
# damages, claims, cost, including reasonable attorney fee claimed on Juspay.
# The end user has NO right to claim any indemnification based on its use
# of Licensed Software. See the GNU Affero General Public License for more details.
# 
# You should have received a copy of the GNU Affero General Public License
# along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.

#!/bin/bash

BASEDIR=$(dirname $0)
cd $BASEDIR
echo $1
echo $2
if [ -d "build/outputs/aar/$1" ]; then
    echo "Cleaning existing directory $1"
	rm -rf build/outputs/aar/$1
fi

mkdir build/outputs/aar/$1
cd build/outputs/aar/
if [ -f "$1.aar" ]; then
    cp $1.aar $1
    cd $1
    unzip -q $1.aar
    rm $1.aar

    mkdir src libs
    mv classes.jar libs/$1.jar
    rm -f R.txt
    rm -rf jni
    cd ..

    tar -zcf $1-$2.tar.gz $1/
    rm -rf $1/
    echo "Done"
    cd $BASEDIR
else
    echo "Build not found"
    exit -1
fi


