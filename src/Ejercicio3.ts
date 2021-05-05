export function abbrevName(name: string): string {

    let newName: string = name.charAt(0)+ "." + 
    name.charAt(name.indexOf(" ")+1)
    return newName.toUpperCase();
}