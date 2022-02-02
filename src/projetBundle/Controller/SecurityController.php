<?php

namespace projetBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class SecurityController extends Controller
{

/**
     * @Route("/oubli-mot-de-passe", methods="GET|POST")
     */
    public function forgottenPassword(Request $request, UserPasswordEncoderInterface $encoder, \Swift_Mailer $mailer): Response
    {
        if ($request->isMethod('POST')) {
 
            $email = $request->request->get('email');
 
            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneByEmail($email);
 
            if ($user === null) {
                $this->addFlash('danger', 'Email Inconnu, recommence !');
                return $this->redirectToRoute('app_forgotten_password');
            }
           
            $message = (new \Swift_Message('Oubli de mot de passe'))
                ->setFrom(array('vivioclock@gmail.com'=> 'Les VallesBaques'))
                ->setTo($user->getEmail())
                ->setBody(
                $this->renderView(
                    'security/emails/resetPasswordMail.html.twig',
                    [
                        'user'=>$user,
                        'url'=>$url
                    ]
                ),
                    'text/html'
                );
            $mailer->send($message);
 
            $this->addFlash('notice', 'Mail envoyé, tu vas pouvoir te connecter à nouveau !');
 
           
        }
 
       
    }
 
    /**** Réinisialiation du mot de passe par mail
     * @Route("/reinitialiser-mot-de-passe/{token}", name="app_reset_password")
     *//*
    public function resetPassword(Request $request, string $token, UserPasswordEncoderInterface $passwordEncoder)
    {
        //Reset avec le mail envoyé
        if ($request->isMethod('POST')) {
            $entityManager = $this->getDoctrine()->getManager();
 
            $user = $entityManager->getRepository(User::class)->findOneByResetToken($token);
            /* @var $user User */
 /*
            if ($user === null) {
                $this->addFlash('danger', 'Mot de passe non reconnu');
                return $this->redirectToRoute('home');
            }
 
            $user->setResetToken(null);
            $user->setPassword($passwordEncoder->encodePassword($user, $request->request->get('password')));
            $entityManager->flush();
 
            $this->addFlash('notice', 'Mot de passe mis à jour !');
 
            return $this->redirectToRoute('security_login');
        }else {
 
            return $this->render('security/resetPassword.html.twig', ['token' => $token]);
        }

    }*/
}
