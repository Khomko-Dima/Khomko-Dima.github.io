export function Targets() {

}
export function Target(target) {
    try{
        ym(75175354, 'reachGoal', 'targetAll');
        ym(75175354, 'reachGoal', 'target' + target);

        gtag('event', 'click', {
            'event_category': 'button',
            'event_action': 'click',
            'event_label': 'target' + target
        });
    }catch(e){
        console.log(e);
    }
    // try {
    //     fbq('track', 'Lead');
    // }catch(e){
    //     console.log(e);
    // }
}