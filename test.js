
function f(name,surname,birth,job,relations,hometown,image) {
    return{
        name,surname,birth,job,relations,hometown,image
    }
}

const peoples =[
    f('Vladimir','Epitketov','20.02.1995','Engineer','Free','Almaty','images/photo1.jpg'),
    f('Ahmed','Ahmatov','01.06.1998','Coder','Married','Astana','images/photo2.jpg'),
    f('Nastya','Ivanonva','16.09.1997','Cooker','In Relations','Karaganda','images/photo3.jpg'),
    f('Yulya','Malikina','06.11.1999','Student','Free','Shymkent','images/photo4.jpeg'),
    f('Mariya','Kalinina','08.01.1998','Policeman','Married','Kyzylorda','images/photo5.jpg'),
    f('Tamara','Grigoryan','18.07.2000','Student','Free','Almaty','images/photo6.jpg'),
    f('Katya','Bogacheva','17.06.1988','Lawyer','Married','Semey','images/photo7.jpg'),
    f('Azat','Amir','04.12.1992','Teacher','In Relations','Astana','images/photo8.jpg'),
    f('Mikhail','Karnauh','29.01.1993','Fireman','Free','Kazan','images/photo9.jpg'),
    f('Yuriy','Kim','27.04.1995','Student','In Relations','Toronto','images/photo10.jpg'),
    f('Denis','Muratov','23.12.1995','Dentist','Married','Moscow','images/photo11.jpg'),
    f('Kim','Ndidi','08.05.1996','Farmer','Free','Dublin','images/photo12.jpg'),
    f('Lera','Vlasova','22.05.1997','Student','Free','Kiyev','images/photo13.jpg'),

]


new Vue({
    el:'#app',
    data:{
        peoples:peoples,
        people:peoples[0],
        selectedFriendIndex:0,
    },
    methods:{
        selectFriend:function (index) {
            console.log('Click',index)
            this.people = peoples[index]
            this.selectedFriendIndex=index
        }
    }
})


