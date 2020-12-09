import firebase from 'firebase';
import {UserAccount } from './@types/servers/auth.types';
import moment from 'moment';

export const mapUser=(user:firebase.User): UserAccount=>{
    let userAccount = {} as UserAccount;
    userAccount={
        accountId: user.uid,
        displayName:user.displayName ,
        emailAddress: user.email ,
        avatarUrl: user.photoURL ,
    }
    return userAccount;
}

export const getDaysBetweenDates = (startDate: string, endDate: string) => {
    const now = moment.utc(startDate);
    const dates = [];
    while (now.isSameOrBefore(moment.utc(endDate))){
      dates.push(now.format('YYYY-MM-DD'));
      now.add(1, 'days');
    }
    return dates;
};