package codes.dec25.oops.constructor;

public class ConstEg {
    int x=1;
    
    public  ConstEg()
    {
        x=10;
    }

    
    public  ConstEg(int x)
    {
        this.x=x;
    }




    public static void main(String[] args) {
        ConstEg c= new ConstEg();
        System.out.println(c.x);

        ConstEg c2= new ConstEg(12);
        System.out.println(c2.x);

        ConstEg2 d1= new ConstEg2();
        System.out.println(d1.x);

        
    }

}
