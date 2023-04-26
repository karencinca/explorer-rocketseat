import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useState } from 'react'

export function Header() {
    const [search, setSearch] = useState("")

    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <Link to="/">
                <span className='logo'>RocketMovies</span>
            </Link>
            

            <div className='inputbar'>
              <Input 
              placeholder="Pesquisar pelo título" 
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              />  
            </div>
            

            <Profile>
                <div>
                    <Link to="/profile" className='name'>{user.name}</Link>
                    <span onClick={signOut}>sair</span>
                </div>
                    <Profile to="/profile">
                        <img src={avatarUrl} alt={user.name} />
                    </Profile>
            </Profile>
        </Container>
    )
}